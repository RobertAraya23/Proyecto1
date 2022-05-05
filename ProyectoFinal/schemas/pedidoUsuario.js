var mongoose = require('mongoose');

var pedidoUsuarioSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mesCompra: String,
  nombreLibro: String,
  precio: Number,
  fechaCompra: String,
  puntosGanados: Number,
  puntosUsados: Number
  
});

module.exports = mongoose.model('pedidoUsuario', pedidoUsuarioSchema, 'pedidosUsuario');