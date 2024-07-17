import Joi, { ObjectSchema } from "joi";

const productCreate = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
  image: Joi.string(),
  price: Joi.number().required(),
});

const updateProduct = Joi.object().keys({
  name: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
  price: Joi.number(),
});

export default {
  "/inventory/products/create": productCreate,
  "/inventory/products/update/{id}": updateProduct
} as { [key: string]: ObjectSchema };