import Joi from "joi";

/** Create todo */
export const schema = {
  create: Joi.object({ todo: Joi.string().required() }),
  delete: Joi.string()
    .ruleset.length(20)
    .rule({ message: "Invalid ID, example valid ID: JtAH2091UDCOPgrhYhh8" })
    .required(),
  update: Joi.object({
    id: Joi.string().required(),
    todo: Joi.string().required(),
  }),
};
