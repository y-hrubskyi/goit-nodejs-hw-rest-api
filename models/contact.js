const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(new RegExp(/^\+\d{12}$/))
    .required(),
});

const updateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().pattern(new RegExp(/^\+\d{12}$/)),
}).or("name", "email", "phone");

module.exports = {
  addSchema,
  updateSchema,
};
