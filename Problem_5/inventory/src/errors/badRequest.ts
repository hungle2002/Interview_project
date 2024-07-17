import CustomeError from './customErrors';
import status from 'http-status';

class BadRequestError extends CustomeError {
  private statusCode: number;
  constructor(message: string = 'Bad Request') {
    super(message);
    this.statusCode = status.BAD_REQUEST;
  }
}

export default BadRequestError;
