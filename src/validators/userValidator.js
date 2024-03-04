const Joi = require("joi");

const { Regexps, Subscriptions, Enums } = require("./sharedConstants");

const registerSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required(),
  password: Joi.string().pattern(Regexps.PASSWORD).required(),
  subscription: Joi.string()
    .equal(...Enums.SUBSCRIPTIONS)
    .default(Subscriptions.STARTER),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required(),
  password: Joi.string().pattern(Regexps.PASSWORD).required(),
});

const updateTokenSchema = Joi.object({
  token: Joi.string().allow(null).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .equal(...Enums.SUBSCRIPTIONS)
    .required(),
});

const joiSchemas = {
  register: registerSchema,
  verifyEmail: verifyEmailSchema,
  login: loginSchema,
  updateToken: updateTokenSchema,
  updateSubscription: updateSubscriptionSchema,
};

module.exports = joiSchemas;
