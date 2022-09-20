const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    id: { type: Number, required: true },
    razon_social: { type: String, required: true },
    telefono: { type: String, required: true },
    documento: { type: String, required: true },
    tipo_documento: { type: Number, required: true },
    direccion: { type: Number, required: true },
    email: { type: Number, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);
