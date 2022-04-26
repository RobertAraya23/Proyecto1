var mongoose = require('mongoose');

var homeSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const homeModel = mongoose.model("homes",homeSchema)
module.exports = homeModel