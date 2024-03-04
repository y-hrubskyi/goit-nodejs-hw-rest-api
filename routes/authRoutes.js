const { Router } = require("express");

const { authenticate, validateBody } = require("../middlewares");
const joiSchemas = require("../validators/userValidator");
const { auth } = require("../controllers");

const router = Router();

router.post("/register", validateBody(joiSchemas.register), auth.register);

router.post("/login", validateBody(joiSchemas.login), auth.login);

router.post("/logout", authenticate, auth.logout);

router.get("/verify/:verificationToken", auth.verifyEmail);

router.post(
  "/verify",
  validateBody(joiSchemas.verifyEmail),
  auth.resendVerifyEmail
);

module.exports = router;
