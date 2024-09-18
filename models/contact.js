import Joi from "joi";

const createContactSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phone: Joi.string().required().min(10).max(30),
  favorite: Joi.boolean().default(false),
});

const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().min(5).max(30),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

export default {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
};
