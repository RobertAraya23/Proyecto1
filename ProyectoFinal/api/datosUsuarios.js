var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var datosUsuario = require('../schemas/datosUsuario.js');

router.get("/", function(req, res) {
    datosUsuario.find().exec()
    .then(function(result){
        res.json(result);
    });
});

router.post('/insertarDatosUsuario', function(req, res) {
    var datosUsuarioNuevo = new datosUsuario({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaDeNacimiento: req.body.fechaDeNacimiento,
      correoElectronico: req.body.correoElectronico,
      contrasenna: req.body.contrasenna,
      puntaje: req.body.puntaje
    });
  
    datosUsuarioNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
module.exports = router;