import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: `${import.meta.env.VITE_GEMINI_API_KEY}`});

export async function geminiHandler(
	data: string,
): Promise<string | undefined> {
	try {

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: data,
        });
        return response.text;
          
	} catch (error) {
		console.error("POST handler error: ", error);
		throw error;
	}
}