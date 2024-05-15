import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
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
    // Can use the APP error
    console.error('Error sending email', error);
  }
};

export { sendEmail };
