const { authService } = require("../../services");

const resendVerifyEmail = async (req, res, next) => {
  const { email } = req.body;
  await authService.resendVerifyEmail(email);
  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
