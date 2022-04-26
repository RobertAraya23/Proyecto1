var mongoose = require('mongoose');

var puntajeSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const puntajeModel = mongoose.model("puntajes",puntajeSchema)
module.exports = puntajeModel