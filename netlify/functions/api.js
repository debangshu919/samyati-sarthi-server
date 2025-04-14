import express, { Router } from 'express';
import serverless from "serverless-http";
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT } from '../../config.js';
import chatbot from '../../assistant.js';

const router = Router();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// API ROUTES
router.get('/chatbot', async (req, res) => {
    try {
        const { prompt } = req.query;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const response = await chatbot(prompt);
        if (typeof response === 'object' && response.error) {
            return res.status(500).json(response);
        }
        return res.status(200).json({ message: response });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.use('/api/', router);
export const handler = serverless(app);