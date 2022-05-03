var mongoose = require('mongoose');

var datosUsuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    apellido: String,
    fechaDeNacimiento: String,
    correoElectronico: String,
    contrasenna: String,
    puntaje: Number
});

//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose

module.exports = mongoose.model('DatosUsuario', datosUsuarioSchema, 'datosUsuarios');

