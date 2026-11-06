const { GoogleGenAI, Type } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-3.5-flash";

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

/**
 * 強健的 JSON 擷取器：
 * 自動過濾模型可能附加的前綴或 ```json 標籤
 */
function parseJsonSafely(rawText) {
    if (!rawText) throw new Error("Empty response from AI model");

    const firstBrace = rawText.indexOf("{");
    const lastBrace = rawText.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
        throw new Error(`No valid JSON object found in response: ${rawText.substring(0, 80)}`);
    }

    const cleanJsonStr = rawText.substring(firstBrace, lastBrace + 1);
    return JSON.parse(cleanJsonStr);
}

async function getAiRecommendationsFromGemini(hotels, preferences) {
    if (!ai) {
        throw new Error("Missing GEMINI_API_KEY");
    }

    // 1. 僅保留具有 eco 環保紀錄的酒店資料作為 AI 候選池
    const ecoHotels = hotels.filter(h => h.eco && typeof h.eco === "string" && h.eco.trim() !== "");
    const candidatePool = ecoHotels.length > 0 ? ecoHotels : hotels;

    // 2. 簡化酒店特徵以降低 Token 消耗並提升匹配精度，同時傳入中英文名稱與特色
    const simplifiedHotels = candidatePool.map(h => ({
        id: h.id,
        name: h.name,
        enName: h.enName || h.name,
        region: h.region,
        stars: h.stars,
        rating: h.rating,
        price: h.price,
        hasBreakfast: Boolean(h.hasBreakfast),
        hasPrivateBath: Boolean(h.hasPrivateBath),
        hasPool: Boolean(h.hasPool),
        hasCancel: Boolean(h.hasCancel),
        hasGym: Boolean(h.hasGym),
        hasAirportShuttle: Boolean(h.hasAirportShuttle),
        hasFreeParking: Boolean(h.hasFreeParking),
        locationTags: h.locationTags || [],
        eco: h.eco
    }));

    const prompt = `
You are an intelligent hotel concierge and recommender system for a bilingual platform in Hong Kong.
Evaluate the user's survey preferences and select the SINGLE BEST matching eco-friendly hotel from the candidate list.
Then write a compelling, tailored recommendation (nudge text) in three languages: Traditional Chinese (zh-TW), Simplified Chinese (zh-CN), and English (en).

User Preferences:
${JSON.stringify(preferences)}

Available Eco-Friendly Hotels:
${JSON.stringify(simplifiedHotels)}

Requirements:
1. Select 1 hotel that best aligns with the user's booking focus (budget/value/quality), desired region, and requested facilities.
2. The recommendedHotelId must strictly match the integer 'id' of the chosen hotel.
3. Provide the hotel name in Traditional Chinese (zh-TW), Simplified Chinese (zh-CN), and English (en).
4. Provide the tailored recommendation nudge text in three languages:
   - recommendation_zh_tw: Traditional Chinese, natural and persuasive, under 35 words.
   - recommendation_zh_cn: Simplified Chinese, natural and persuasive, under 35 words.
   - recommendation_en: English, fluent and engaging, under 25 words.
5. Naturally highlight the sustainable / eco-friendly advantages of the chosen hotel without explicitly mentioning that it was deduced from preferences.
6. Output ONLY a raw JSON object matching the schema. Do NOT include any conversational preamble or markdown backticks outside.
`;

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Model Request Timeout (7s)")), 7000)
    );

    const apiPromise = ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
        config: {
            systemInstruction: "You are a JSON-only API. Output strictly raw JSON matching the schema with zero conversational text.",
            maxOutputTokens: 600,
            temperature: 0.2,
            thinkingConfig: {
                thinkingBudget: 0
            },
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    recommendedHotelId: {
                        type: Type.INTEGER,
                        description: "The unique integer ID of the best matched hotel from the provided list."
                    },
                    recommendedHotelName_zh_tw: {
                        type: Type.STRING,
                        description: "The name of the selected hotel in Traditional Chinese."
                    },
                    recommendedHotelName_zh_cn: {
                        type: Type.STRING,
                        description: "The name of the selected hotel in Simplified Chinese."
                    },
                    recommendedHotelName_en: {
                        type: Type.STRING,
                        description: "The name of the selected hotel in English."
                    },
                    recommendation_zh_tw: {
                        type: Type.STRING,
                        description: "A short recommendation sentence in Traditional Chinese under 35 words."
                    },
                    recommendation_zh_cn: {
                        type: Type.STRING,
                        description: "A short recommendation sentence in Simplified Chinese under 35 words."
                    },
                    recommendation_en: {
                        type: Type.STRING,
                        description: "A short recommendation sentence in English under 25 words."
                    }
                },
                required: [
                    "recommendedHotelId",
                    "recommendedHotelName_zh_tw",
                    "recommendedHotelName_zh_cn",
                    "recommendedHotelName_en",
                    "recommendation_zh_tw",
                    "recommendation_zh_cn",
                    "recommendation_en"
                ]
            }
        }
    });

    const response = await Promise.race([apiPromise, timeoutPromise]);
    const rawText = (response.text || "").trim();

    const parsed = parseJsonSafely(rawText);

    // 格式化為結構化三語物件，同時保留傳統單一字串欄位向下相容
    return {
        recommendedHotelId: parsed.recommendedHotelId,
        recommendedHotelName: {
            "zh-TW": parsed.recommendedHotelName_zh_tw,
            "zh-CN": parsed.recommendedHotelName_zh_cn,
            "en": parsed.recommendedHotelName_en
        },
        recommendation: {
            "zh-TW": parsed.recommendation_zh_tw,
            "zh-CN": parsed.recommendation_zh_cn,
            "en": parsed.recommendation_en
        },
        // 向下相容傳統舊程式碼讀取屬性
        recommendedHotelName_default: parsed.recommendedHotelName_zh_cn,
        recommendation_default: parsed.recommendation_zh_cn
    };
}

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {
        return res.status(200).json({
            status: "ok",
            message: "TripStay AI Hotel Multilingual Match & Recommendation Service Active",
            has_token: Boolean(GEMINI_API_KEY)
        });
    }

    if (req.method === "POST") {
        try {
            const { products = [], preferences = {} } = req.body || {};

            if (!products || products.length === 0) {
                return res.status(400).json({ detail: "Hotels list must not be empty." });
            }

            let result;
            try {
                result = await getAiRecommendationsFromGemini(products, preferences);
            } catch (aiErr) {
                console.log(`[AI Model Error/Timeout]: ${aiErr.message}. Switching to multilingual Fallback system.`);
                const ecoPool = products.filter(h => h.eco && typeof h.eco === "string" && h.eco.trim() !== "");
                const pool = ecoPool.length > 0 ? ecoPool : products;
                const defaultHotel = pool[Math.floor(Math.random() * pool.length)];

                const nameTw = (defaultHotel.i18n && defaultHotel.i18n["zh-TW"] && defaultHotel.i18n["zh-TW"].name) || defaultHotel.name;
                const nameCn = (defaultHotel.i18n && defaultHotel.i18n["zh-CN"] && defaultHotel.i18n["zh-CN"].name) || defaultHotel.name;
                const nameEn = defaultHotel.enName || (defaultHotel.i18n && defaultHotel.i18n["en"] && defaultHotel.i18n["en"].name) || defaultHotel.name;

                result = {
                    recommendedHotelId: defaultHotel.id,
                    recommendedHotelName: {
                        "zh-TW": nameTw,
                        "zh-CN": nameCn,
                        "en": nameEn
                    },
                    recommendation: {
                        "zh-TW": `為您精選平台今日主推特選住宿：${nameTw}，盡享輕奢設計與可持續發展理念。`,
                        "zh-CN": `为您精选平台今日主推特选住宿：${nameCn}，尽享轻奢设计与可持续发展理念。`,
                        "en": `Featured top pick for your stay: ${nameEn}, combining premier comfort with certified eco-friendly sustainability.`
                    },
                    recommendedHotelName_default: nameCn,
                    recommendation_default: `为您精选平台今日主推特选住宿：${nameCn}，尽享轻奢设计与可持续发展理念。`
                };
            }

            return res.status(200).json(result);

        } catch (e) {
            console.log(`[Handler Exception]: ${e.message}`);
            return res.status(500).json({ detail: e.message });
        }
    }

    return res.status(405).json({ detail: `Method ${req.method} Not Allowed` });
};