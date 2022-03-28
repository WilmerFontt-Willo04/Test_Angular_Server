const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    nombreCompleto: { type: String, required: true },
    nombreEmpresa: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    categoria: { type: String, required: true },
    mensaje: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("contact", contactSchema);
