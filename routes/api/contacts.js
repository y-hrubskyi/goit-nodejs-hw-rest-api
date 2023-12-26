const { Router } = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validate } = require("../../middlewares");
const { contactSchemas: contacts } = require("../../models");

const router = Router();

router.get("/", ctrl.getContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validate(contacts.addSchema), ctrl.addContact);

router.put("/:id", validate(contacts.updateSchema), ctrl.updateContact);

router.delete("/:id", ctrl.removeContact);

module.exports = router;
