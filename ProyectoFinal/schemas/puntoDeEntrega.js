var mongoose = require('mongoose');

var puntoDeEntregaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  provincia: String,
  canton: String,
  Distrito: String,
  lat: String,
  long: String,
  Direccion: String

});

module.exports = mongoose.model('puntoDeEntrega', puntoDeEntregaSchema, 'puntosDeEntrega');