import createHttpError from 'http-errors';
import { userModel } from '../db/models/User.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/index.js';
import { sessionModel } from '../db/models/Session.js';

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

export const loginUser = async (payload) => {
  const user = await userModel.findOne({ email: payload.email });
  if (!user) {
    throw createHttpError(401, 'Email or password is wrong');
  }
  const isEqual = await bcrypt.compare(payload.password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'Email or password is wrong');
  }

  await sessionModel.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await sessionModel.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};
