const crypto = require("node:crypto");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const {
  Regexps,
  Enums,
  Subscriptions,
} = require("../validators/sharedConstants");

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
      enum: Enums.SUBSCRIPTIONS,
      default: Subscriptions.STARTER,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
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

userSchema.methods.setVerificationToken = function () {
  this.verificationToken = crypto.randomUUID();
};
userSchema.methods.setVerify = function () {
  this.verify = true;
  this.verificationToken = null;
};

userSchema.methods.setToken = function (token) {
  this.token = token;
};
userSchema.methods.removeToken = function () {
  this.token = null;
};

userSchema.methods.updSubscription = function (subscription) {
  this.subscription = subscription;
};

userSchema.methods.setAvatar = function () {
  this.avatarURL = gravatar.url(this.email);
};
userSchema.methods.updAvatar = function (avatarURL) {
  this.avatarURL = avatarURL;
};

const User = model("User", userSchema);

module.exports = User;
