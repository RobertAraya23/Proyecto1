var mongoose = require('mongoose');

var carritoSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const carritoModel = mongoose.model("Carritos",carritoSchema)
module.exports = carritoModel