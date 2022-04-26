var mongoose = require('mongoose');

var libroSchema = new mongoose.Schema({
  nombre: String,
  disponibilidad: Boolean,
  fechaDePublicacion: String,
  formato: String,
  genero: String,
  precio: Number,
  resenna: String,
  imagen: String,
  ism: String,
  editorial: String,
  premiosEnHonor: String,
  idAutor:String
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
const libroModel = mongoose.model("Libros",libroSchema)
module.exports = libroModel