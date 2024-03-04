const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.isValidPassword(password))) {
    throw HttpError(401, "Email or password is wrong");
  }

  if (!user.verify) {
    throw HttpError(401, "Email not verified");
  }

  const payload = {
    id: user._id,
  };
  const { JWT_SECRET_KEY } = process.env;
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "4h" });

  user.setToken(token);
  await user.save();

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
