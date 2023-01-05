import { Express, Request, Response } from 'express';

function routes(app: Express) {
    app.get('/ping', (req: Request, res: Response) => res.send('pong'));
}

export default routes;
