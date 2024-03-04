const { Router } = require("express");

const { users } = require("../controllers");
const { authenticate, validateBody, upload } = require("../middlewares");
const joiSchemas = require("../validators/userValidator");

const router = Router();

router.post("/register", validateBody(joiSchemas.register), users.register);

router.get("/verify/:verificationToken", users.verifyEmail);

router.post(
  "/verify",
  validateBody(joiSchemas.verifyEmail),
  users.resendVerifyEmail
);

router.post("/login", validateBody(joiSchemas.login), users.login);

router.post("/logout", authenticate, users.logout);

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
