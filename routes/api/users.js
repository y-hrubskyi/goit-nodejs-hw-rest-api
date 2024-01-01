const { Router } = require("express");

const { users } = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { joiSchemas } = require("../../models/user");

const router = Router();

router.post(
  "/register",
  validateBody(joiSchemas.registerSchema),
  users.register
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

module.exports = router;
