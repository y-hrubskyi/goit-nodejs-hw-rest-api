const { contactService } = require("../../services");

const getById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const contact = await contactService.getById(id, owner);
  res.json(contact);
};

module.exports = getById;
