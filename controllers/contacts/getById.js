const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = getById;
