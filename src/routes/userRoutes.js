const { Router } = require("express");

const { authenticate, validateBody, upload } = require("../middlewares");
const joiSchemas = require("../validators/userValidator");
const { userController } = require("../controllers");

const router = Router();

router.get("/current", authenticate, userController.getCurrent);

router.patch(
  "/subscription",
  authenticate,
  validateBody(joiSchemas.updateSubscription),
  userController.updateSubscription
);

router.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  userController.updateAvatar
);

module.exports = router;
