import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { CustomError } from './Errors';
import { StatusCodes } from 'http-status-codes';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (
  recipient: string,
  subject: string,
  body: string
): Promise<void> => {
  const msg = {
    to: recipient,
    from: 'ravidev1729@gmail.com',
    subject: subject,
    text: body,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email', error);
    // can use we want to
    // const message = (error as Error).message;
    // throw new CustomError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export { sendEmail };
