var mongoose = require('mongoose');

var imagenSchema = new mongoose.Schema({
 titulo:String,
 imagen:String
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const imagenModel = mongoose.model("imagenes",imagenSchema)
module.exports = imagenModel