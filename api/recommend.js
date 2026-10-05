const { GoogleGenAI } = require("@google/genai");

// 讀取環境變數中的 GEMINI_API_KEY
const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim();
const MODEL_NAME = "gemini-flash-latest";

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

async function getAiRecommendationsFromGemini(products, preferences) {
    if (!ai) {
        throw new Error("Missing GEMINI_API_KEY");
    }

    const simplifiedProducts = products.map(p => ({
        name: p.name,
    }));

    const prompt = `
Based on the given context, write a short, engaging recommendation sentence (under 30 words) for the following products:
User preferences: ${JSON.stringify(preferences)},
Products: ${JSON.stringify(simplifiedProducts)}.

The recommendation focus on 1-3 major aspects based on the user preferences, and includes promotion of the idea of eco-sustainability of the products, but without explicitly mentioning or indicating about the extraction from user preferences.

Output MUST be plain text only, exactly one short sentence, starting with "These items". Do not wrap into JSON or quotes.
`;

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Model Request Timeout (7s)")), 7000)
    );

    const apiPromise = ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
        config: {
            systemInstruction: "You are a helpful and concise shopping assistant.",
            maxOutputTokens: 100,
            temperature: 0.3
        }
    });

    const response = await Promise.race([apiPromise, timeoutPromise]);

    let content = (response.text || "").trim();

    // 清理可能的多餘 markdown 或引號
    if (content.startsWith("```")) {
        content = content.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```$/, "").trim();
    }
    content = content.replace(/^["']|["']$/g, '');

    return content;
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
            message: "Vercel AI Function Active",
            has_token: Boolean(GEMINI_API_KEY)
        });
    }

    if (req.method === "POST") {
        try {
            const { products = [], preferences = {} } = req.body || {};

            if (!products || products.length < 3) {
                return res.status(400).json({ detail: "Products list must contain at least 3 items." });
            }

            let result;
            try {
                result = await getAiRecommendationsFromGemini(products, preferences);
            } catch (aiErr) {
                console.log(`[AI Model Error/Timeout]: ${aiErr.message}. Switching to Fallback system.`);
                result = 'Results generated based on your preference.';
            }

            return res.status(200).json({ recommendation: result });

        } catch (e) {
            console.log(`[Handler Exception]: ${e.message}`);
            return res.status(500).json({ detail: e.message });
        }
    }

    return res.status(405).json({ detail: `Method ${req.method} Not Allowed` });
};