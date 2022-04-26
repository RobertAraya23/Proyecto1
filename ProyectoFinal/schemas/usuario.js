var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido:String,
  fechaDeNacimiento:String,
  correoElectronico:String,
  cedula:String,
  contraseña:String,
  telefono:Number,
  administrador:String
});

  
  
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const usuarioModel = mongoose.model("Usuarios",usuarioSchema)
module.exports = usuarioModel