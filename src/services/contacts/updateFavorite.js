const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateFavorite = async (id, owner, update) => {
  const contact = await Contact.findOneAndUpdate(
    { _id: id, owner },
    { favorite: update },
    { runValidators: true, new: true }
  );

  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  return contact;
};

module.exports = updateFavorite;
