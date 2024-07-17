import CustomeError from './customErrors';
import status from 'http-status';

class ForbiddenError extends CustomeError {
  private statusCode: number;
  constructor(message: string = 'Forbidden') {
    super(message);
    this.statusCode = status.FORBIDDEN;
  }
}

export default ForbiddenError;
