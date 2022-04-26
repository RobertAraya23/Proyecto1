var mongoose = require('mongoose');

var editarSchema = new mongoose.Schema({
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const editarModel = mongoose.model("editars",editarSchema)
module.exports = editarModel