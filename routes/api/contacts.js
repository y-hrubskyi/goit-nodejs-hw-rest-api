const { Router } = require("express");

const { contacts } = require("../../controllers");
const { validate, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = Router();

router.get("/", contacts.getAll);

router.get("/:id", isValidId, contacts.getById);

router.post("/", validate(schemas.addSchema), contacts.add);

router.put(
  "/:id",
  isValidId,
  validate(schemas.updateSchema),
  contacts.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validate(schemas.updateFavoriteSchema),
  contacts.updateFavorite
);

router.delete("/:id", isValidId, contacts.removeById);

module.exports = router;
