const mongoose = require("mongoose");

const FacturaClienteSchema = mongoose.Schema({
    id: { type: Number, required: true },
    factura_id: { type: String, required: true },
    razon_social: { type: String, required: true },
    documento: { type: String, required: true },
    tipo_documento: { type: Number, required: true },
    telefono: { type: String, required: true },
    direccion: { type: Number, required: true },
    email: { type: Number, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('FacturaCliente', FacturaClienteSchema);
