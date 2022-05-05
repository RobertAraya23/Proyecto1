var mongoose = require('mongoose');

var tarjetaSchema = new mongoose.Schema({
  nombre: String,
  numeroDeTarjeta:String,
  mesDeExpiracion:String,
  annoExpiracion:Number,
  codigoCVV:Number
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
module.exports = mongoose.model('tarjeta', tarjetaSchema, 'tarjetas');
