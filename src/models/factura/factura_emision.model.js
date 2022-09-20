const mongoose = require("mongoose");

const FacturaEmisionSchema = mongoose.Schema({
    id: { type: Number, required: true },
    factura_id: { type: String, required: true },
    tipo_comprobante: { type: String, required: true },
    numero_ruc: { type: String, required: true },
    tipo_ambiente: { type: Number, required: true },
    serie: { type: String, required: true },
    serie_secuencial: { type: String, required: true },
    numero_comprobante: { type: Number, required: true },
    codigo_numerico: { type: Number, required: true },
    tipo_emision: { type: Number, required: true },
    digito_verificador: { type: Number, required: true },
    clave_acceso: { type: String, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('FacturaEmision', FacturaEmisionSchema);

