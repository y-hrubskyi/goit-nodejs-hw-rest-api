const { Router } = require("express");

const { authenticate, validateBody } = require("../middlewares");
const joiSchemas = require("../validators/userValidator");
const { authController } = require("../controllers");

const router = Router();

router.post(
  "/register",
  validateBody(joiSchemas.register),
  authController.register
);

router.post("/login", validateBody(joiSchemas.login), authController.login);

router.post("/logout", authenticate, authController.logout);

router.get("/verify/:verificationToken", authController.verifyEmail);

router.post(
  "/verify",
  validateBody(joiSchemas.verifyEmail),
  authController.resendVerifyEmail
);

module.exports = router;
