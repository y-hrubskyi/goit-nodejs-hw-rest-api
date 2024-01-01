const controllerWrapper = require("./controllerWrapper.middleware");
const authenticate = require("./authenticate.middleware");
const validateBody = require("./validateBody.middleware");
const isValidId = require("./isValidId.middleware");
const handleMongooseErrors = require("./handleMongooseErrors.middleware");

module.exports = {
  controllerWrapper,
  authenticate,
  validateBody,
  isValidId,
  handleMongooseErrors,
};
