const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = removeById;
