const { contactsOperations } = require("../../services");

const addContact = async (req, res) => {
  const contact = await contactsOperations.add(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: contact,
    },
  });
};

module.exports = addContact;
