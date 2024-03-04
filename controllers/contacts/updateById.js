const { contactService } = require("../../services");

const updateById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const contact = await contactService.updateById(id, owner, req.body);
  res.json(contact);
};

module.exports = updateById;
