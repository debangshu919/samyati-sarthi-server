import express, { Router } from 'express';
import serverless from "serverless-http";
import bodyParser from 'body-parser';
import cors from 'cors';
import { chatbot } from '../../assistant.js';
import { getWeather } from '../../weather.js';

const router = Router();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// API ROUTES

router.get('/chatbot', async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({
            statusCode: 400,
            status: 'error',
            message: 'Prompt is required',
            request: {
                prompt: prompt,
            },
            response: 'Prompt is required',
        });
    }

    const response = await chatbot(prompt);
    if (response.error) {
        return res.status(500).json({
            statusCode: 500,
            status: 'error',
            message: 'Internal server error',
            request: {
                prompt: prompt,
            },
            response: response.error ? response.error : 'An error occurred while processing your request',
        });
    }

    return res.status(200).json({
        statusCode: 200,
        status: 'success',
        message: 'Data fetched successfully',
        request: {
            prompt: prompt,
        },
        response: response,
    });
});

router.get('/weather', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({
            statusCode: 400,
            status: 'error',
            message: 'City is required',
            request: {
                city: city,
            },
            response: 'City is required',
        });
    }

    const response = await getWeather(city);
    if (response.error) {
        return res.status(500).json({
            statusCode: 500,
            status: 'error',
            message: 'Internal server error',
            request: {
                city: city,
            },
            response: response.error ? response.error : 'An error occurred while processing your request',
        });
    }

    return res.status(200).json({
        statusCode: 200,
        status: 'success',
        message: 'Data fetched successfully',
        request: {
            city: city,
        },
        response: response,
    });
});

app.use('/api/', router);
export const handler = serverless(app);