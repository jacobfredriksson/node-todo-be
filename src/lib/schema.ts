import Joi from "joi";

/** Create todo */
export const schema = Joi.object({
  todo: Joi.string().required(),
});
