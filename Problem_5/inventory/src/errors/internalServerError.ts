import CustomeError from './customErrors';
import status from 'http-status';

class InternalServerError extends CustomeError {
  private statusCode: number;
  constructor(message: string = 'Something went wrong') {
    super(message);
    this.statusCode = status.INTERNAL_SERVER_ERROR;
  }
}

export default InternalServerError;
