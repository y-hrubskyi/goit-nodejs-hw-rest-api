const { contactService } = require("../../services");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = { ...req.body, owner };

  const contact = await contactService.add(newContact);
  res.status(201).json(contact);
};

module.exports = add;
