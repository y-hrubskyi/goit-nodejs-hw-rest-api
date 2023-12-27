const { Router } = require("express");

const { contacts: controller } = require("../../controllers");
const { validate } = require("../../middlewares");
const { contactSchemas: contacts } = require("../../models");

const router = Router();

router.get("/", controller.getContacts);

router.get("/:id", controller.getContactById);

router.post("/", validate(contacts.addSchema), controller.addContact);

router.put("/:id", validate(contacts.updateSchema), controller.updateContact);

router.delete("/:id", controller.removeContact);

module.exports = router;
