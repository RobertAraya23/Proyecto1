var mongoose = require('mongoose');

var pedidoUsuarioSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mesCompra: String,
  nombreLibro: String,
  precio: Number,
  fechaCompra: String,
  
});

module.exports = mongoose.model('pedidoUsuario', pedidoUsuarioSchema, 'pedidosUsuario');