const { authService } = require("../../services");

const logout = async (req, res, next) => {
  await authService.logout(req.user);
  res.status(204).json();
};

module.exports = logout;
