const { userService } = require("../../services");
const { HttpError } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  const { file, user } = req;

  if (!file) {
    throw HttpError(400, "File wasn't uploaded");
  }

  const result = await userService.updateAvatar(user, file);
  res.json(result);
};

module.exports = updateAvatar;
