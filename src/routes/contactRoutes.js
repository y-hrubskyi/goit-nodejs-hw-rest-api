const { Router } = require("express");

const { authenticate, isValidId, validateBody } = require("../middlewares");
const joiSchemas = require("../validators/contactValidator");
const { contactController } = require("../controllers");

const router = Router();

router.get("/", authenticate, contactController.getAll);

router.get("/:id", authenticate, isValidId, contactController.getById);

router.post(
  "/",
  authenticate,
  validateBody(joiSchemas.add),
  contactController.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(joiSchemas.update),
  contactController.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(joiSchemas.updateFavorite),
  contactController.updateFavorite
);

router.delete("/:id", authenticate, isValidId, contactController.removeById);

module.exports = router;
