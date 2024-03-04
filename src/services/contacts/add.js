const { Contact } = require("../../models");

const add = async (newContact) => {
  const contact = await Contact.create(newContact);
  return contact;
};

module.exports = add;
