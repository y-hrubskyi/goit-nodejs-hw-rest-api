const cloudinary = require("cloudinary").v2;

const { HttpError } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  const { file, user } = req;

  if (!file) {
    throw HttpError(400, "File wasn't uploaded");
  }

  const fileName = `${user._id}_${file.originalname}`;

  const result = await cloudinary.uploader.upload(file.path, {
    public_id: `${fileName}`,
    folder: "users/avatars",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  });

  await cloudinary.uploader.destroy(file.filename);

  const avatarURL = result.secure_url;
  user.updAvatar(avatarURL);

  await user.save();

  res.json({
    message: "Avatar updated successfully",
    avatarURL,
  });
};

module.exports = updateAvatar;
