import express, { Express } from 'express';
import dotenv from 'dotenv';
import emailRouter from './routes/emailRoutes';
import { scheduleEmails } from './services';
import { errorHandler } from './middleware';
const app: Express = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use('/api', emailRouter);

scheduleEmails();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
