const { Schema, model } = require("mongoose");
const Joi = require("joi");

//! const { handleMongooseErrors } = require("../middlewares");

const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,20}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^\(\d{3}\) \d{3}-\d{4}$/,
};

// Mongoose
const contactSchema = new Schema(
  {
    name: {
      type: String,
      match: Regexps.NAME,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: Regexps.EMAIL,
      unique: true,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      match: Regexps.PHONE,
      unique: true,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

//! contactSchema.post(["save", "findOneAndUpdate"], handleMongooseErrors);

const Contact = model("contact", contactSchema);

// Joi
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
  addSchema,
  updateSchema,
  updateFavoriteSchema,
};

module.exports = {
  Contact,
  joiSchemas,
};
