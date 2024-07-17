import {Request, Response} from 'express';
import status from 'http-status';

function errorHandleMiddleware(req: Request, res: Response) {
  const customError = {
    statusCode: status.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong with the server!',
  };
  res.status(customError.statusCode).json({msg: customError.msg});
}

export default errorHandleMiddleware;
