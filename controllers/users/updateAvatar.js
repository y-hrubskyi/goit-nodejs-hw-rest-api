const fs = require("node:fs/promises");
const path = require("node:path");
const Jimp = require("jimp");

const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../public/avatars");

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    throw HttpError(400, "Bad Request");
  }

  try {
    const { user } = req;
    const { path: uploadName, originalname } = req.file;

    const avatar = await Jimp.read(uploadName);
    await avatar.autocrop().cover(250, 250).writeAsync(uploadName);

    const avatarName = `${user._id}_${originalname}`;
    const newName = path.join(avatarsDir, avatarName);
    await fs.rename(uploadName, newName);

    const avataURL = path.join("avatars", avatarName);
    user.updAvatar(avataURL);
    await user.save();

    res.json({ avataURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    next(error);
  }
};

module.exports = updateAvatar;
