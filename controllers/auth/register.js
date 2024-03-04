const { authService } = require("../../services");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.register(email, password);
  res.status(201).json({ user });
};

module.exports = register;
