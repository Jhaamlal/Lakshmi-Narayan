import { PrismaClient, Email, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// create the email
export const createEmail = async (
  data: Omit<Email, 'id' | 'sentAt'>
): Promise<Email> => {
  return await prisma.email.create({ data });
};

// Get email by it's id, we can get the email or not
export const getEmailById = async (id: number): Promise<Email | null> => {
  return await prisma.email.findUnique({ where: { id } });
};

// All emails send or not send all
export const getAllEmails = async (): Promise<Email[]> => {
  return await prisma.email.findMany();
};

// Get the mails that are not sent,
export const getAllFailSendMail = async (): Promise<Email[]> => {
  return await prisma.email.findMany({
    where: {
      sentAt: null,
      scheduledAt: {
        lte: new Date(),
      },
    },
  });
};

// update email
export const updateEmail = async (
  id: number,
  data: Prisma.EmailUpdateInput
): Promise<Email> => {
  return await prisma.email.update({
    where: { id },
    data,
  });
};

// Delete the item
export const deleteEmail = async (id: number): Promise<Email> => {
  return await prisma.email.delete({ where: { id } });
};

// email schedule to be send in the future,or from certain time,but not sent yet
export const getEmailsToSend = async (date: Date): Promise<Email[]> => {
  return await prisma.email.findMany({
    where: {
      scheduledAt: {
        lte: date,
      },
      sentAt: null,
    },
  });
};
