const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (id, owner) => {
  const contact = await Contact.findOne({ _id: id, owner });
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  return contact;
};

module.exports = getById;
