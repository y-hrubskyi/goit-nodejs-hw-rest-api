const { controllerWrapper } = require("../../helpers");

const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");
const removeById = require("./removeById");

module.exports = {
  getAll: controllerWrapper(getAll),
  getById: controllerWrapper(getById),
  add: controllerWrapper(add),
  updateById: controllerWrapper(updateById),
  updateFavorite: controllerWrapper(updateFavorite),
  removeById: controllerWrapper(removeById),
};
