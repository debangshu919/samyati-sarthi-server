import { OpenAI } from "openai";
import { NEBIUS_API_KEY } from "./config.js";

const client = new OpenAI({
    baseURL: "https://api.studio.nebius.com/v1/",
    apiKey: NEBIUS_API_KEY,
});

export async function chatbot(prompt) {
    try {
        const completion = await client.chat.completions.create({
            "model": "meta-llama/Llama-3.2-1B-Instruct",
            "max_tokens": 0,
            "temperature": 0.6,
            "messages": [
                {
                    "role": "system",
                    "content": "You are an AI assistant for a tourism website.\n\nHere is an example of a correct answer that is expected from you as an AI assistant:\n\nUser: Paris\n\nAI Assistant: Paris, the City of Light, is the capital of France known for its art, culture, and cuisine. Best time to visit is April-June or September-October. The Paris Museum Pass can save you money if visiting multiple attractions.\n\nHere is an example of a correct answer that is expected from you as an AI assistant:\n\nUser: Tokyo\n\nAI Assistant: Tokyo is Japan's busy capital that mixes ultramodern with traditional. Get a Suica or Pasmo card for easy travel on public transportation. Tokyo is extremely safe but can be crowded.\n\nHere is an example of a correct answer that is expected from you as an AI assistant:\n\nUser: Hey\n\nAI Assistant: Hello! I'm your travel assistant. Where are you planning to visit?\n\nHere is an example of a correct answer that is expected from you as an AI assistant:\n\nUser: suggest me some places to visit\n\nAI Assistant: You could visit Paris for art and romance, Kyoto for temples and culture, or Bali for beaches and nature.\n\nkeep the response short, i.e, around 3 sentences"
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt
                        }
                    ]
                }
            ]
        })

        const response = await completion.choices[0].message.content;
        // console.log(response);

        return response;
    } catch (error) {
        console.log(error);
        return { error: "Failed to generate response." };
    }

}
