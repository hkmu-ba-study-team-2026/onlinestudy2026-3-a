const { GoogleGenAI, Type } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-3.5-flash";

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

/**
 * 強健的 JSON 擷取器：
 * 自動過濾模型可能附加的 "Here is the JSON..." 前綴或 ```json 標籤
 */
function parseJsonSafely(rawText) {
    if (!rawText) throw new Error("Empty response from AI model");

    // 找出第一個 '{' 與最後一個 '}' 之間的完整 JSON 區塊
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

    // 2. 簡化酒店特徵以降低 Token 消耗並提升匹配精度
    const simplifiedHotels = candidatePool.map(h => ({
        id: h.id,
        name: h.name,
        region: h.region,
        stars: h.stars,
        rating: h.rating,
        price: h.price,
        hasBreakfast: Boolean(h.hasBreakfast),
        hasPrivateBath: Boolean(h.hasPrivateBath),
        hasPool: Boolean(h.hasPool),
        hasCancel: Boolean(h.hasCancel),
        hasGym: Boolean(h.hasGym),
        eco: h.eco
    }));

    const prompt = `
You are an intelligent hotel concierge and recommender system.
Evaluate the user's preferences and select the BEST matching hotel from the candidate list, then write an engaging recommendation sentence.

User Preferences:
${JSON.stringify(preferences)}

Available Eco-Friendly Hotels:
${JSON.stringify(simplifiedHotels)}

Requirements:
1. Select1 hotel that best aligns with the user's booking focus (budget/value/quality), desired region, and requested facilities.
2. The recommendedHotelId must strictly match the integer 'id' of the chosen hotel.
3. The recommendation text must be plain text under 30 words, written in Simplified Chinese.
4. Naturally highlight the sustainable/eco-friendly advantages of the chosen hotel without explicitly saying it was derived from user preferences.
5. Output ONLY a raw JSON object. Do NOT include any conversational prefix like "Here is the JSON".
`;

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Model Request Timeout (7s)")), 7000)
    );

    const apiPromise = ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
        config: {
            systemInstruction: "You are a JSON-only API. Output strictly raw JSON matching the schema with zero conversational text.",
            maxOutputTokens: 500,
            temperature: 0.2,
            // 關閉內部思考以加速回應並避免擠壓輸出 Token
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
                    recommendedHotelName: {
                        type: Type.STRING,
                        description: "The name of the selected hotel."
                    },
                    recommendation: {
                        type: Type.STRING,
                        description: "A short, persuasive sentence under 30 words starting with 'These items'."
                    }
                },
                required: ["recommendedHotelId", "recommendedHotelName", "recommendation"]
            }
        }
    });

    const response = await Promise.race([apiPromise, timeoutPromise]);
    const rawText = (response.text || "").trim();

    // 使用安全擷取器解析 JSON
    return parseJsonSafely(rawText);
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
            message: "TripStay AI Hotel Match & Recommendation Service Active",
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
                console.log(`[AI Model Error/Timeout]: ${aiErr.message}. Switching to Fallback system.`);
                // 備援：優先推薦 4星 Eco 酒店 (ID 21)
                const defaultHotel = products.find(h => h.id === 21) || products[0];
                result = {
                    recommendedHotelId: defaultHotel.id,
                    recommendedHotelName: defaultHotel.name,
                    recommendation: "These items feature premium amenities and certified green operations tailored to your travel expectations."
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