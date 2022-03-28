const { Router } = require("express");
const router = Router();

const contactsCtrl = require("../controllers/contacts.controller");

//*** CRUD */
router.get("/", contactsCtrl.getContacts);

router.post("/", contactsCtrl.createContact);

router.get("/:id", contactsCtrl.getContact);

router.put("/:id", contactsCtrl.editContact);

router.delete("/:id", contactsCtrl.deleteContact);

module.exports = router;
