const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateById = async (id, owner, update) => {
  const contact = await Contact.findOneAndUpdate({ _id: id, owner }, update, {
    runValidators: true,
    new: true,
  });

  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  return contact;
};

module.exports = updateById;
