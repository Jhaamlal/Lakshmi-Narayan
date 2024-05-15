import {
  deleteScheduledEmailService,
  getEmailService,
  listEmailsServices,
  listFailedEmailsServices,
  rescheduleEmailServices,
  scheduleEmailsServices,
} from '../services';
import { AppError, sendSuccessResponse } from '../utils';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const scheduleEmailController = async (req: Request, res: Response) => {
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
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const getEmailController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const email = await getEmailService(+id);
    if (!email) {
      return res.send(StatusCodes.NOT_FOUND).json({ error: 'Email not Found' });
    }
    sendSuccessResponse(res, ` email of thr ${id}`, email, StatusCodes.OK);
  } catch (error) {
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const listAllMailsController = async (req: Request, res: Response) => {
  try {
    const emails = await listEmailsServices();
    sendSuccessResponse(res, 'All emails', emails, StatusCodes.OK);
  } catch (error) {
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const listFailMailsController = async (req: Request, res: Response) => {
  try {
    const failedEmails = await listFailedEmailsServices();
    sendSuccessResponse(
      res,
      'All Failed response',
      failedEmails,
      StatusCodes.OK
    );
  } catch (error) {
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const updateEmailController = async (req: Request, res: Response) => {
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
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const deleteController = async (req: Request, res: Response) => {
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
    const message = (error as Error).message;
    throw new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
