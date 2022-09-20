const mongoose = require("mongoose");

const FacturaSchema = mongoose.Schema({
    id: { type: Number, required: true },
    serie: { type: String, required: true },
    proformada: { type: boolean, required: true },
    proformaId: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    impuestos: { type: Number, required: true },
    total: { type: Number, required: true },
    observaciones: { type: String, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('Factura', FacturaSchema);
