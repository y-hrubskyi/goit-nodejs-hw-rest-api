const controllerWrapper = require("./controllerWrapper.middleware");
const authenticate = require("./authenticate.middleware");
const validateBody = require("./validateBody.middleware");
const isValidId = require("./isValidId.middleware");

module.exports = {
  controllerWrapper,
  authenticate,
  validateBody,
  isValidId,
};
