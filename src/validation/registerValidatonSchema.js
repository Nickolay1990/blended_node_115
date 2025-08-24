import Joi from 'joi';

export const registerUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
