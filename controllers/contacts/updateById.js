const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const contact = await Contact.findOneAndUpdate({ _id: id, owner }, req.body, {
    new: true,
  });
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = updateById;
