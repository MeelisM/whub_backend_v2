import express, { Express } from 'express';
import dotenv from 'dotenv';

import connectDatabase from '../utils/db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`[server]: Server running at http://localhost:${PORT}`);
});
