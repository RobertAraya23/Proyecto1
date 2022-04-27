var mongoose = require('mongoose');

var inicioSesionSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const inicioSesionModel = mongoose.model("InicioSesiones",inicioSesionSchema)
module.exports = inicioSesionModel