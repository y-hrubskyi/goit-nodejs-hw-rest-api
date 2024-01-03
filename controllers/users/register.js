const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const register = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = new User({ email });
  await newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
