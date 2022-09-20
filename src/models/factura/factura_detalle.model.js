const mongoose = require("mongoose");

const FacturaDetalleSchema = mongoose.Schema({
    id: { type: Number, required: true },
    factura_id: { type: String, required: true },
    codigo_externo: { type: String, required: true },
    descripcion: { type: String, required: true },
    unidad_medida: { type: Number, required: true },
    cantidad: { type: String, required: true },
    precio: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('FacturaDetalle', FacturaDetalleSchema);
