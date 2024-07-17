import CustomeError from './customErrors';
import status from 'http-status';

class InvalidParameterError extends CustomeError {
  private statusCode: number;
  constructor(param: string) {
    super(`Missing or invalid ${param}`);
    this.statusCode = status.BAD_REQUEST;
  }
}

export default InvalidParameterError;
