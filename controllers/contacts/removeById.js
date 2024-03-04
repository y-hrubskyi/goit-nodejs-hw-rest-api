const { contactService } = require("../../services");

const removeById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const contact = await contactService.removeById(id, owner);

  res.json(contact);
};

module.exports = removeById;
