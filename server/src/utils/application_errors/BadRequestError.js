import ApplicationError from './ApplicationError.js';

class BadRequestError extends ApplicationError{
  constructor () {
    super('The request could not be understood by the server due to malformed syntax.',400);
  }

}

export default BadRequestError;