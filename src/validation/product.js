import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().valid('books', 'electronics', 'clothing', 'other').required(),
    description: Joi.string(),

});

export const updateProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
    description: Joi.string(),

});
