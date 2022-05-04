var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var orden = require('../schemas/orden.js');

router.get('/', function(req, res) {
  orden.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  orden.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});




router.post('/actualizar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  var idLibro = req.body.idLibro;
  var idPago = req.body.idPago;
  var cantidadLibros = req.body.cantidadLibros;
 

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  orden.findOneAndUpdate({idUsuario: idUsuario},{$set:{idLibro:idLibro, idPago:idPago, cantidadLibros:cantidadLibros}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var ordenNueva = new orden({

    _id: new mongoose.Types.ObjectId(),
    idUsuario: req.body.idUsuario,
    idLibro: req.body.idLibro,
    idPago: req.body.idPago,
    cantidadLibros: req.body.cantidadLibros
    
  });

  ordenNueva.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;