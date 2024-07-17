import CustomeError from './customErrors';
import status from 'http-status';

class ValueNotFoundError extends CustomeError {
  private statusCode: number;
  constructor(param : string) {
    super(`${param} Not Found`);
    this.statusCode = status.NOT_FOUND;
  }
}

export default ValueNotFoundError;
