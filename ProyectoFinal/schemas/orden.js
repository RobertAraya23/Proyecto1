var mongoose = require('mongoose');

var ordenSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const ordenModel = mongoose.model("Ordenes",ordenSchema)
module.exports = ordenModel
