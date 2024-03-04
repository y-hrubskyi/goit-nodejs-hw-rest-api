const { authService } = require("../../services");

const verifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;
  await authService.verifyEmail(verificationToken);
  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
