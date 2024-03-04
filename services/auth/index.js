const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register: register,
  login: login,
  logout: logout,
  verifyEmail: verifyEmail,
  resendVerifyEmail: resendVerifyEmail,
};
