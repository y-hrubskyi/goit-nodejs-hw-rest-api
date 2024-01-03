const logout = async (req, res, next) => {
  const { user } = req;

  user.removeToken();
  await user.save();

  res.status(204).json();
};

module.exports = logout;
