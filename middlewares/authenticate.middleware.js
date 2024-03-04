const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { HttpError } = require("../helpers");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      throw HttpError(401, "Not authorized");
    }

    const { JWT_SECRET_KEY } = process.env;
    const { id } = jwt.verify(token, JWT_SECRET_KEY);

    const user = await User.findById(id);
    if (!user || user.token !== token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};

module.exports = authenticate;
