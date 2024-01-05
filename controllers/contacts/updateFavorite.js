const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  const contact = await Contact.findOneAndUpdate(
    { _id: id, owner },
    { favorite },
    { new: true }
  );
  if (!contact) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(contact);
};

module.exports = updateFavorite;
