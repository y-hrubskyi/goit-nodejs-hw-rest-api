const { Router } = require("express");

const { contacts } = require("../../controllers");
const { authenticate, isValidId, validateBody } = require("../../middlewares");
const { joiSchemas } = require("../../models/contact");

const router = Router();

router.get("/", authenticate, contacts.getAll);

router.get("/:id", authenticate, isValidId, contacts.getById);

router.post(
  "/",
  authenticate,
  validateBody(joiSchemas.addSchema),
  contacts.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(joiSchemas.updateSchema),
  contacts.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(joiSchemas.updateFavoriteSchema),
  contacts.updateFavorite
);

router.delete("/:id", authenticate, isValidId, contacts.removeById);

module.exports = router;
