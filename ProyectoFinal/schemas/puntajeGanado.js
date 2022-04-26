var mongoose = require('mongoose');

var puntajeGanadoSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const puntajeGanadoModel = mongoose.model("PuntajeGanados",puntajeGanadoSchema)
module.exports = puntajeGanadoModel