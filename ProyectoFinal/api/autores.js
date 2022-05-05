var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var autor = require('../schemas/autor.js');

router.get('/', function(req, res) {
  autor.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  autor.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var librosPublicados = req.body.librosPublicados;
  var premiosGanados = req.body.premiosGanados;
  var paisNacimiento = req.body.paisNacimiento;
  var fechaNacimiento = req.body.formato;
  var generoDelAutor = req.body.generoDelAutor;
  var fechaDeDefuncion = req.body.fechaDeDefuncion;
  var imagen = req.body.imagen;
  

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  autor.findOneAndUpdate({nombre: nombre},{$set:{librosPublicados:librosPublicados, premiosGanados:premiosGanados, paisNacimiento:paisNacimiento, fechaNacimiento:fechaNacimiento, generoDelAutor:generoDelAutor, fechaDeDefuncion:fechaDeDefuncion, imagen:imagen}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var libroNuevo = new autor({

    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    librosPublicados: req.body.librosPublicados,
    premiosGanados: req.body.premiosGanados,
    paisNacimiento: req.body.paisNacimiento,
    fechaNacimiento: req.body.fechaNacimiento,
    generoDelAutor: req.body.generoDelAutor,
    fechaDeDefuncion: req.body.fechaDeDefuncion,
    imagen: req.body.imagen


  });

  libroNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;