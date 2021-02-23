import Joi from "joi";

/** Create todo */
export const schema = {
  create: Joi.object({ todo: Joi.string().required() }),
  delete: Joi.string()
    .ruleset.length(20)
    .rule({ message: "example: JtAH2091UDCOPgrhYhh8" }),
};
