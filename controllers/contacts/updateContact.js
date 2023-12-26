const { contactsOperations } = require("../../services");
const { HttpError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { id } = req.params;

  const contact = await contactsOperations.updateById(id, req.body);
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

module.exports = updateContact;
