const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const contact = await Contact.findOne({ _id: id, owner });
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = getById;
