const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const emailData = {
    to: email,
    subject: "Verify your email",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blank">Verify your email</a>`,
  };
  await sendEmail(emailData);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;