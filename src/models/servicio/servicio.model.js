const mongoose = require("mongoose");

const ServicioSchema = mongoose.Schema({
    id: { type: Number, required: true },
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    unidad_medida: { type: String, required: true },
    precio: { type: Number, required: true },
    total_impuestos: { type: Number, required: true },
    precio_impuestos: { type: Number, required: true },
    estado: { type: Boolean, required: true }
});

module.exports = mongoose.model('Servicio', ServicioSchema);