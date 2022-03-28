const Contact = require("../models/contact");

const contactCtrl = {};

contactCtrl.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

contactCtrl.createContact = async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.send({ message: "Created Contacts" });
};

contactCtrl.getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
};

contactCtrl.editContact = async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "Contact Updated" });
};

contactCtrl.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ status: "Contact Deleted" });
};

module.exports = contactCtrl;
