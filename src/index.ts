import dotenv from 'dotenv';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import router from './router.js';
import connectDatabase from './config/db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use('/api', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, async () => {
    console.log(`[SERVER]: Server running at http://localhost:${PORT}`);
    await connectDatabase();
});
