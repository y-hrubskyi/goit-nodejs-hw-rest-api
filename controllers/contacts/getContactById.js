const { contactsOperations } = require("../../services");
const { httpError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { id } = req.params;

  const contact = await contactsOperations.getById(id);
  if (!contact) {
    throw httpError(404, `Contact with id=${id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getContactById;
