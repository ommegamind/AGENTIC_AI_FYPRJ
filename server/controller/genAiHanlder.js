import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

//be a good idea to keep all the google related files in separate folders

export const mailContentGenerator=async(promptText)=>{
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${promptText}`,
    });
    return response.text;
}