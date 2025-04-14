import express, { Router } from 'express';
import serverless from "serverless-http";
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT } from 'https://profound-dusk-078fbd.netlify.app/.netlify/functions/config';
import chatbot from 'https://profound-dusk-078fbd.netlify.app/.netlify/functions/assistant';

const router = Router();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// API ROUTES
router.get('/chatbot', async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await chatbot(prompt);
    if (response.error) {
        return res.status(500).json({ error: response.error });
    }
    return res.status(200).json({ response });


});

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })

app.use('api/', router);
export const handler = serverless(app);