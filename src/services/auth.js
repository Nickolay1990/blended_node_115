import createHttpError from 'http-errors';
import { userModel } from '../db/models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
  const existingUser = await userModel.findOne({ email: payload.email });

  if (existingUser) {
    throw createHttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await userModel.create({
    ...payload,
    password: hashedPassword,
  });

  return user;
};
