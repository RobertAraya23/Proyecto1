var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var libro = require('../schemas/libroo.js');

router.get('/', function(req, res) {
  libro.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  libro.findById(idUsuario).exec()
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
  libro.findOneAndUpdate({nombre: nombre}, {$set:{edad:edad}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  
  var libroNuevo = new libro({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    disponibilidad: req.body.disponibilidad,
    fechaDePublicacion: req.body.fechaDePublicacion,
    formato: req.body.formato,
    genero: req.body.genero,
    precio: req.body.precio,
    resenna: req.body.resenna,
    imagen: req.body.imagen,
    ism: req.body.ism,
    editorial: req.body.editorial,
    premiosEnHonor: req.body.premiosEnHonor,
    idAutor: req.body.idAutor
  });

  libroNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;