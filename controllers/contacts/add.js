const { Contact } = require("../../models");

const add = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = { ...req.body, owner };
  const contact = await Contact.create(newContact);

  res.status(201).json(contact);
};

module.exports = add;
