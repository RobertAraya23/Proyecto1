var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var editarUsuario = require('../schemas/editarUsuario.js');

router.get('/', function(req, res) {
  editarUsuario.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  editarUsuario.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var fechaDeNacimiento = req.body.fechaDeNacimiento;
  var correoElectronico = req.body.correoElectronico;
  var contrasenna = req.body.contrasenna;
  var puntaje = req.body.puntaje;
  
  
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  editarUsuario.findOneAndUpdate({nombre: nombre},{$set:{apellido:apellido, fechaDeNacimiento:fechaDeNacimiento, correoElectronico:correoElectronico, contrasenna:contrasenna, puntaje:puntaje}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var editarUsuarioNuevo = new editarUsuario({

    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaDeNacimiento: req.body.fechaDeNacimiento,
    correoElectronico: req.body.correoElectronico,
    contrasenna: req.body.contrasenna,
    puntaje: req.body.puntaje,
    

  });

  editarUsuarioNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;