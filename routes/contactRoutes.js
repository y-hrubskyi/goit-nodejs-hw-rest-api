const { Router } = require("express");

const { authenticate, isValidId, validateBody } = require("../middlewares");
const joiSchemas = require("../validators/contactValidator");
const { contacts } = require("../controllers");

const router = Router();

router.get("/", authenticate, contacts.getAll);

router.get("/:id", authenticate, isValidId, contacts.getById);

router.post("/", authenticate, validateBody(joiSchemas.add), contacts.add);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(joiSchemas.update),
  contacts.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(joiSchemas.updateFavorite),
  contacts.updateFavorite
);

router.delete("/:id", authenticate, isValidId, contacts.removeById);

module.exports = router;
