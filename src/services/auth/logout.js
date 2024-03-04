const logout = async (user) => {
  user.removeToken();
  await user.save();
};

module.exports = logout;
