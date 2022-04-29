var mongoose = require('mongoose');

var socioComercialSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  direccion: String,
  telefono: String,
  correoElectronico: String,
  inicioRelaciones: String
});

module.exports = mongoose.model('socioComercial', socioComercialSchema, 'sociosComerciales');