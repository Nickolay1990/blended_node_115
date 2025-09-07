import Joi from 'joi';

export const registerUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginUseralidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
