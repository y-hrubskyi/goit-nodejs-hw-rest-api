const { contactsOperations } = require("../../services");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { id } = req.params;

  const contact = await contactsOperations.removeById(id);
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = removeContact;
