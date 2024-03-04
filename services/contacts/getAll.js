const { Contact } = require("../../models");

const getAll = async (owner, page, limit, favorite) => {
  const isFavoriteQuery = favorite === "true" || favorite === "false";
  const filter = isFavoriteQuery ? { owner, favorite } : { owner };
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");

  return contacts;
};

module.exports = getAll;
