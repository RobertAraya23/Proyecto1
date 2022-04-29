var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var puntoDeEntrega = require('../schemas/puntoDeEntrega.js');

router.get('/', function(req, res) {
  puntoDeEntrega.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  puntoDeEntrega.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var direccion = req.body.direccion;
  var telefono = req.body.telefono;
  var correoElectronico = req.body.correoElectronico;
  var inicioRelaciones = req.body.inicioRelaciones;
  

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  puntoDeEntrega.findOneAndUpdate({nombre: nombre},{$set:{direccion:direccion, telefono:telefono, correoElectronico:correoElectronico, inicioRelaciones:inicioRelaciones}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var socioComercialNuevo = new puntoDeEntrega({

    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correoElectronico: req.body.correoElectronico,
    inicioRelaciones: req.body.inicioRelaciones

  });

  socioComercialNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;