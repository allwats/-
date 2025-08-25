import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are an expert Instagram content creator specializing in short-form videos like Reels and Stories. Your goal is to write engaging, concise, and trendy video scripts.`;

const constructUserMessage = (keywords) => {
  return `
Create a script for an Instagram Reel based on the following topic: "${keywords}".

The script should be structured with clear visual cues and spoken lines.
- Keep the total video length under 30 seconds.
- Use simple, conversational language.
- Start with a strong hook to grab attention immediately.
- End with a clear call to action (e.g., "Follow for more tips!", "Comment your thoughts below!").

Here is the topic:
${keywords}
  `;
};

export const generateScript = async (keywords) => {
  try {
    const userMessage = constructUserMessage(keywords);
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 0.95,
        }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating script from Gemini:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};