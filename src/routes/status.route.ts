import {Router, Request, Response, NextFunction  } from 'express';


const statusRoute = Router();

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
        res.sendStatus(200);
})

export default statusRoute;