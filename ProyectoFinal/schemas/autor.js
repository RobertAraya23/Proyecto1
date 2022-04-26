var mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

var autorSchema = new mongoose.Schema({
nombre:String,
librosPublicados:String,
premiosGanados:String,
paisNacimiento:String,
fechaNacimiento:String,
generoDelAutor:String,
fechaDeDeFuncion:String

});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const autorModel = mongoose.model("autores",autorSchema)
module.exports = autorModel