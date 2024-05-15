import {
  deleteScheduledEmailService,
  getEmailService,
  listEmailsServices,
  listFailedEmailsServices,
  rescheduleEmailServices,
  scheduleEmailsServices,
} from '../services';
import { BadRequestError, sendSuccessResponse } from '../utils';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const scheduleEmailController: RequestHandler<
  Record<string, never>,
  unknown,
  {
    scheduledAt: Date;
    recipient: string;
    subject: string;
    body: string;
  }
> = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { recipient, subject, body, scheduledAt } = req.body;
    const email = await scheduleEmailsServices({
      recipient,
      subject,
      body,
      scheduledAt: new Date(scheduledAt),
    });
    sendSuccessResponse(res, 'Schedule the Email', email, StatusCodes.CREATED);
  } catch (error) {
    next(error);
  }
};

export const getEmailController: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const email = await getEmailService(+id);
    if (!email) {
      throw new BadRequestError('Email not found');
    }
    sendSuccessResponse(res, ` email of thr ${id}`, email, StatusCodes.OK);
  } catch (error) {
    next(error);
  }
};

export const listAllMailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const emails = await listEmailsServices();
    sendSuccessResponse(res, 'All emails', emails, StatusCodes.OK);
  } catch (error) {
    next(error);
  }
};

export const listFailMailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const failedEmails = await listFailedEmailsServices();
    sendSuccessResponse(
      res,
      'All Failed response',
      failedEmails,
      StatusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

export const updateEmailController: RequestHandler<
  { id: string },
  unknown,
  {
    scheduledAt: Date;
    recipient: string;
    subject: string;
    body: string;
  }
> = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { recipient, subject, body, scheduledAt } = req.body;
    const updateEmailData = await rescheduleEmailServices(+id, {
      recipient,
      subject,
      body,
      scheduledAt: new Date(scheduledAt),
    });
    sendSuccessResponse(
      res,
      `Update the ${id} email`,
      updateEmailData,
      StatusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};

export const deleteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedEmailData = await deleteScheduledEmailService(+id);
    sendSuccessResponse(
      res,
      'Deleted the Email',
      deletedEmailData,
      StatusCodes.OK
    );
  } catch (error) {
    next(error);
  }
};
