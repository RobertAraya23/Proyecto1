var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 
  
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const userModel = mongoose.model("users",userSchema)
module.exports = userModel