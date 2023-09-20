import { NextFunction, Request, Response } from 'express';

const serverHealtheCheck = (_req: Request, res: Response, _next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

export default { serverHealtheCheck };