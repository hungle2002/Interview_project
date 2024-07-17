import {Request, Response} from 'express';
import status from 'http-status';

function notFoundMiddleware(req: Request, res: Response) {
  res.status(status.NOT_FOUND).json({msg: 'Route not found!'});
}

export default notFoundMiddleware;
