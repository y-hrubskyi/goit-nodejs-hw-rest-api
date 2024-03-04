const authenticate = require("./authenticate");
const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const upload = require("./uploadImage");
const urlNotFound = require("./urlNotFound");
const errorHandler = require("./errorHandler");

module.exports = {
  authenticate,
  validateBody,
  isValidId,
  upload,
  urlNotFound,
  errorHandler,
};
