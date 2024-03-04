const cloudinary = require("cloudinary").v2;

const updateAvatar = async (user, file) => {
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

  return {
    message: "Avatar updated successfully",
    avatarURL,
  };
};

module.exports = updateAvatar;
