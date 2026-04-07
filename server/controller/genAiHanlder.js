import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

//be a good idea to keep all the google related files in separate folders

export const mailContentGenerator=async(promptText)=>{
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `prompt: ${promptText}! use the above prompt and return a js obj in the following format {"mailBody":"the content for the mail as requested above", "receiver": here from the above prompt extract the receiver they mentioned, "subject":... note:if multiple mentioned extract the first one} return a json string response that can be parsed to JSON.parse`,
    });

    const promptResponse= response.text.slice(7, -3);

    const reply = JSON.parse(promptResponse);
    
    return reply;
}