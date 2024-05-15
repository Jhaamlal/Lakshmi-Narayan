import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(500).send({
    errors: [{ message: 'Bhai Daal Me kuch kala' }],
  });
};