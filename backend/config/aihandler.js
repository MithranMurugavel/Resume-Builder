import OpenAI from "openai";

const aiHandler = new OpenAI({
    apiKey: process.env.AI_API_KEY,
    baseURL: process.env.AI_BASE_URL
});


export default aiHandler;