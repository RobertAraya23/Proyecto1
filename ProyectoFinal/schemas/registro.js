var mongoose = require('mongoose');

var registroSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  fechaDeNacimiento: String,
  correoElectronico: String,
  password: String,  
  administrador: Boolean,
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const registroModel = mongoose.model("Registros",registroSchema)
module.exports = registroModel