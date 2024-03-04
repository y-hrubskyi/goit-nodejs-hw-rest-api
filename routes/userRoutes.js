const { Router } = require("express");

const { authenticate, validateBody, upload } = require("../middlewares");
const joiSchemas = require("../validators/userValidator");
const { users } = require("../controllers");

const router = Router();

router.get("/current", authenticate, users.getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(joiSchemas.updateSubscription),
  users.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  users.updateAvatar
);

module.exports = router;
