import axios from "axios";
import { OPENWEATHER_API_KEY } from "./config.js";

export async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`);
        const weatherData = response.data;
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw new Error("Could not fetch weather data. Please try again later.");
    }
}