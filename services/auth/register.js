const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const { BACKEND_URL } = require("../../config/env");

const register = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = new User({ email });
  await newUser.setPassword(password);
  newUser.setAvatar();
  newUser.setVerificationToken();
  await newUser.save();

  const emailData = {
    to: email,
    subject: "Verify your email",
    html: `<a href="${BACKEND_URL}/api/auth/verify/${newUser.verificationToken}" target="_blank">Verify your email</a>`,
  };
  await sendEmail(emailData);

  return {
    email: newUser.email,
    subscription: newUser.subscription,
    avatarURL: newUser.avatarURL,
  };
};

module.exports = register;
