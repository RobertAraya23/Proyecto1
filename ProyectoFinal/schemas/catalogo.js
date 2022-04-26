var mongoose = require('mongoose');

var catalogoSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const catalogoModel = mongoose.model("Catalogos",catalogoSchema)
module.exports = catalogoModel