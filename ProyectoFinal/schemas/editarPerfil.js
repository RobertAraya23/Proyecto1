var mongoose = require('mongoose');

var editarPerfilSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const editarPerfilModel = mongoose.model("EditarPerfiles",editarPerfilSchema)
module.exports = editarPerfilModel
