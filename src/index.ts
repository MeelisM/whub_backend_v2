import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes.js';

import connectDatabase from '../utils/db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log(`[server]: Server running at http://localhost:${PORT}`);
    await connectDatabase();

    routes(app);
});
