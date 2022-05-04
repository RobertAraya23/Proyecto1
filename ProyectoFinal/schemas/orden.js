var mongoose = require('mongoose');

var ordenSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idUsuario: String,
  idLibro: String,
  idPago:String,
  cantidadLibros: Number
});

module.exports = mongoose.model('orden', ordenSchema, 'ordenes');