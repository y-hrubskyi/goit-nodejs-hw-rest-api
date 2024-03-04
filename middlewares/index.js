const controllerWrapper = require("./controllerWrapper.middleware");
const authenticate = require("./authenticate.middleware");
const validateBody = require("./validateBody.middleware");
const isValidId = require("./isValidId.middleware");
const upload = require("./upload.middleware");
const urlNotFound = require("./urlNotFound");

module.exports = {
  controllerWrapper,
  authenticate,
  validateBody,
  isValidId,
  upload,
  urlNotFound,
};
