const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { page = 1, limit = 10, favorite } = req.query;
  const { _id: owner } = req.user;

  const filter =
    favorite === "true" || favorite === "false"
      ? { owner, favorite }
      : { owner };
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");

  res.json(contacts);
};

module.exports = getAll;
