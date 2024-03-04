const { authService } = require("../../services");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json(result);
};

module.exports = login;
