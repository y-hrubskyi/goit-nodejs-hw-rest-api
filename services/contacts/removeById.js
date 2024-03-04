const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeById = async (id, owner) => {
  const contact = await Contact.findOneAndDelete({ _id: id, owner });
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  return contact;
};

module.exports = removeById;
