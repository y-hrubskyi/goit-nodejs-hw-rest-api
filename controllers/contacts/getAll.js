const { contactService } = require("../../services");

const getAll = async (req, res) => {
  const { page = 1, limit = 10, favorite } = req.query;
  const { _id: owner } = req.user;

  const contacts = await contactService.getAll(owner, page, limit, favorite);
  res.json(contacts);
};

module.exports = getAll;
