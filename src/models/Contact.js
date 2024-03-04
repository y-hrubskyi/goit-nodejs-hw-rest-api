const { Schema, model } = require("mongoose");

const { Regexps } = require("../validators/sharedConstants");

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
      ref: "User",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
