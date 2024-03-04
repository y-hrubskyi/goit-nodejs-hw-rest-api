const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const { BACKEND_URL } = require("../../config/env");

const resendVerifyEmail = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  user.setVerificationToken();
  await user.save();

  const emailData = {
    to: email,
    subject: "Verify your email",
    html: `<a href="${BACKEND_URL}/api/auth/verify/${user.verificationToken}" target="_blank">Verify your email</a>`,
  };
  await sendEmail(emailData);
};

module.exports = resendVerifyEmail;
