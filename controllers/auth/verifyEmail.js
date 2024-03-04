const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const verifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  user.setVerify();
  await user.save();

  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
