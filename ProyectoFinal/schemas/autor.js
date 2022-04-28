var mongoose = require('mongoose');


var autorSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
nombre:String,
librosPublicados:String,
premiosGanados:String,
paisNacimiento:String,
fechaNacimiento:String,
generoDelAutor:String,
fechaDeDefuncion:String

});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose

module.exports = mongoose.model('autor', autorSchema, 'autores');