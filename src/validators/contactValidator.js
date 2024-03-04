const Joi = require("joi");

const { Regexps } = require("./sharedConstants");

const addSchema = Joi.object({
  name: Joi.string().pattern(Regexps.NAME).required(),
  email: Joi.string().pattern(Regexps.EMAIL).required(),
  phone: Joi.string().pattern(Regexps.PHONE).required(),
  favorite: Joi.boolean().default(false),
});

const updateSchema = Joi.object({
  name: Joi.string().pattern(Regexps.NAME),
  email: Joi.string().pattern(Regexps.EMAIL),
  phone: Joi.string().pattern(Regexps.PHONE),
  favorite: Joi.boolean(),
}).or("name", "email", "phone", "favorite");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiSchemas = {
  add: addSchema,
  update: updateSchema,
  updateFavorite: updateFavoriteSchema,
};

module.exports = joiSchemas;
