import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const GEMINI_API_KEY = process.env.GEMINI;
export const NEBIUS_API_KEY = process.env.NEBIUS;
export const OPENWEATHER_API_KEY = process.env.OPENWEATHER;