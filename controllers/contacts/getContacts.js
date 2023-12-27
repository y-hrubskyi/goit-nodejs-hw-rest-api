const { contactsOperations } = require("../../services");

const getContacts = async (req, res) => {
  const contacts = await contactsOperations.getAll();
  res.json(contacts);
};

module.exports = getContacts;
