import errorHandleMiddleware from './errorHandler';
import notFoundMiddleware from './notFoundHandler';

const middlewares = {
  errorHandleMiddleware,
  notFoundMiddleware,
};

export default middlewares;
