var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Estudiante = require('../schemas/bazar.js');

router.get('/', function(req, res) {
  Estudiante.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  Estudiante.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Estudiante.findOneAndUpdate({nombre: nombre}, {$set:{edad:edad}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var estudianteNuevo = new Estudiante({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    edad: req.body.edad,
    carrera: req.body.carrera
  });

  estudianteNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;