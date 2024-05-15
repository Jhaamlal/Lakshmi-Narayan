import {
  createEmail,
  deleteEmail,
  getAllEmails,
  getAllFailSendMail,
  getEmailById,
  updateEmail,
} from '../repository';
import { Email, Prisma } from '@prisma/client';

export const scheduleEmailsServices = async (
  data: Omit<Email, 'id' | 'sentAt'>
): Promise<Email> => {
  return createEmail(data);
};

export const getEmailService = async (id: number): Promise<Email | null> => {
  return getEmailById(id);
};

export const listEmailsServices = async (): Promise<Email[]> => {
  return getAllEmails();
};

export const listFailedEmailsServices = async (): Promise<Email[]> => {
  return getAllFailSendMail();
};

export const rescheduleEmailServices = async (
  id: number,
  data: Prisma.EmailUpdateInput
): Promise<Email> => {
  return updateEmail(id, data);
};

export const deleteScheduledEmailService = async (
  id: number
): Promise<Email> => {
  return deleteEmail(id);
};
