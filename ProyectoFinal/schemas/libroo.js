var mongoose = require('mongoose');

var libroSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  disponibilidad: String,
  fechaDePublicacion: String,
  formato: String,
  genero: String,
  precio: Number,
  resenna: String,
  imagen: String,
  ism: String,
  editorial: String,
  premiosEnHonor: String,
  idAutor: String,
  nombreAutor : String,
  descuento : Number
});

module.exports = mongoose.model('libro', libroSchema, 'libros');