const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = updateFavorite;
