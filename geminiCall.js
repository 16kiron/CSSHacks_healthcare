import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: "AIzaSyAgkWyqHmlnxpIxe5fnXb8xYM3U4VrD8Eg" });

async function response(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    return response.text;
}

export default response;

