const { Router } = require("express");

const { users } = require("../controllers");
const { authenticate, validateBody, upload } = require("../middlewares");
const { joiSchemas } = require("../models/user");

const router = Router();

router.post(
  "/register",
  validateBody(joiSchemas.registerSchema),
  users.register
);

router.get("/verify/:verificationToken", users.verifyEmail);

router.post(
  "/verify",
  validateBody(joiSchemas.verifyEmailSchema),
  users.resendVerifyEmail
);

router.post("/login", validateBody(joiSchemas.loginSchema), users.login);

router.post("/logout", authenticate, users.logout);

router.get("/current", authenticate, users.getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  users.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  users.updateAvatar
);

module.exports = router;
