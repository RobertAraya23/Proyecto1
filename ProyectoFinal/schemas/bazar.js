var mongoose = require('mongoose');

var bazarSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  carrera: String,
  edad: Number
});

module.exports = mongoose.model('bazar', bazarSchema, 'sorpresas');