const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const verifyEmail = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  user.setVerify();
  await user.save();
};

module.exports = verifyEmail;
