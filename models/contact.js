const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const regexps = {
  name: /^[a-zA-Z0-9_\- ]{3,20}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\(\d{3}\) \d{3}-\d{4}$/,
};

const contactSchema = Schema(
  {
    name: {
      type: String,
      match: regexps.name,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: regexps.email,
      unique: true,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      match: regexps.phone,
      unique: true,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post(["save", "findOneAndUpdate"], handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().pattern(regexps.name).required(),
  email: Joi.string().pattern(regexps.email).required(),
  phone: Joi.string().pattern(regexps.phone).required(),
  favorite: Joi.boolean().default(false),
});

const updateSchema = Joi.object({
  name: Joi.string().pattern(regexps.name),
  email: Joi.string().pattern(regexps.email),
  phone: Joi.string().pattern(regexps.phone),
  favorite: Joi.boolean(),
}).or("name", "email", "phone", "favorite");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
