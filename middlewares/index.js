const controllerWrapper = require("./controllerWrapper.middleware");
const validate = require("./validation.middleware");
const isValidId = require("./isValidId.middleware");
const handleMongooseErrors = require("./handleMongooseErrors.middleware");

module.exports = {
  controllerWrapper,
  validate,
  isValidId,
  handleMongooseErrors,
};
