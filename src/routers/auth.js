import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUseralidationSchema,
  registerUserValidationSchema,
} from '../validation/registerValidatonSchema.js';
import {
  registerUserController,
  loginUserController,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserValidationSchema),
  registerUserController,
);
authRouter.post(
  '/login',
  validateBody(loginUseralidationSchema),
  loginUserController,
);

export default authRouter;
