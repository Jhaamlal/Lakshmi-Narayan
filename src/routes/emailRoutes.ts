import {
  deleteController,
  getEmailController,
  listAllMailsController,
  listFailMailsController,
  scheduleEmailController,
  updateEmailController,
} from '../controllers';
import { Router } from 'express';

const emailRouter = Router();

emailRouter.post('/schedule-email', scheduleEmailController);
emailRouter.get('/emails/:id', getEmailController);
emailRouter.get('/emails', listAllMailsController);
emailRouter.get('/failed-emails', listFailMailsController);
emailRouter.put('/emails/:id', updateEmailController);
emailRouter.delete('/emails/:id', deleteController);

export default emailRouter;
