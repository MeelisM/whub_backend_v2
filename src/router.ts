import express, { Request, Response } from 'express';

const router = express.Router();

/* Routes */
router.get('/ping', (req: Request, res: Response) => res.send('pong'));

export default router;
