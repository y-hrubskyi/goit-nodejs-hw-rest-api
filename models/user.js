const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

//! const { handleMongooseErrors } = require("../middlewares");

const Regexps = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
};
const Subscriptions = {
  STARTER: "starter",
  PRO: "pro",
  BUSINESS: "business",
};
const subscriptions = Object.values(Subscriptions);

// Mongoose
const userSchema = new Schema(
  {
    email: {
      type: String,
      match: Regexps.EMAIL,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 8, // here will be hashed password, because we use pattern only for joi
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: subscriptions,
      default: Subscriptions.STARTER,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = async function (password) {
  this.password = await bcrypt.hash(password, 10);
};
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.setToken = function (token) {
  this.token = token;
};
userSchema.methods.removeToken = function () {
  this.token = null;
};

userSchema.methods.setSubscription = function (subscription) {
  this.subscription = subscription;
};

//! userSchema.post(["save", "findOneAndUpdate"], handleMongooseErrors);

const User = model("user", userSchema);

// Joi
const registerSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required(),
  password: Joi.string().pattern(Regexps.PASSWORD).required(),
  subscription: Joi.string()
    .equal(...subscriptions)
    .default(Subscriptions.STARTER),
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
    .equal(...subscriptions)
    .required(),
});

const joiSchemas = {
  registerSchema,
  loginSchema,
  updateTokenSchema,
  updateSubscriptionSchema,
};

module.exports = {
  User,
  joiSchemas,
};
