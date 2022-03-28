const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/contacts-supports", {})
  .then((db) => console.log("DB conectado a:", db.connection.name))
  .catch((err) => console.error(err));
