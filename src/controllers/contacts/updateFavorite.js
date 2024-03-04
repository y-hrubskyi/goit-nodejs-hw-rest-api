const { contactService } = require("../../services");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  const contact = await contactService.updateFavorite(id, owner, favorite);
  res.json(contact);
};

module.exports = updateFavorite;
