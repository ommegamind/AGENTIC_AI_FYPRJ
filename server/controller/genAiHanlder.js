import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const mailContentGenerator=async(promptText, uploadedFile)=>{
    const userPrompt=` Return ONLY valid JSON.
    Schema:
    {
    "mailBody": "string",
    "receiver": "string | null",
    "subject": "string",
    "cc": ["array"] | null,
    "bcc": ["array"] | null
    }
    Rules:
    - No markdown
    - No backticks
    - No explanation text
    - Only raw JSON response
    User Prompt:${promptText}`;

    let response;

    if(uploadedFile){
        response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    text: userPrompt
                },
                {
                    fileData:
                    {
                        mimeType: uploadedFile.mimeType,
                        fileUri:uploadedFile.uri,
                    },
                },
            ],
        });
    }else{
        response = await ai.models.generateContent({ 
            model: "gemini-2.5-flash", 
            contents: userPrompt });
    }

    const cleanedResponse= response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

    const reply = JSON.parse(cleanedResponse);
    
    return reply;
}