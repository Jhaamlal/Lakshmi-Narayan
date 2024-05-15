import cron from 'node-cron';
import { sendEmail } from '../utils';
import { getEmailsToSend, updateEmail } from '../repository';

// minute, hour, day of the month, month, day of the week => * * * * * *
// If we want delay ,we can use setTimeOut ,or setInterval if needed
const scheduleEmails = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    const emailsToSend = await getEmailsToSend(now);
    for (const email of emailsToSend) {
      await sendEmail(email.recipient, email.subject, email.body);
      await updateEmail(email.id, { sentAt: new Date() });
    }
  });
};

export { scheduleEmails };
