import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "./sysprompt.ts";

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// Main handler
export async function geminiHandler(userQuery: string): Promise<string | undefined> {
  try {
    const systemContext = buildSystemPrompt();

    const contents = [
      {
        role: "system",
        parts: [{ text: systemContext }],
      },
      {
        role: "user",
        parts: [{ text: userQuery }],
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
	  contents: `${JSON.stringify(contents)}`,
    });

    return response.text;

  } catch (error) {
    console.error("Gemini handler error:", error);
    throw error;
  }
}
