var mongoose = require('mongoose');

var descuentoSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const descuentoModel = mongoose.model("Descuentos",descuentoSchema)
module.exports = descueentoModel