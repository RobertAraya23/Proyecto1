var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var reporteAdmin = require('../schemas/reporteAdmin.js');

router.get('/', function(req, res) {
  reporteAdmin.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  reporteAdmin.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});




router.post('/actualizar', function(req, res) {
    
    var mesCompra = req.body.mesCompra;
    var nombreLibro = req.body.nombreLibro;
    var precio = req.body.precio;
    var fechaCompra = req.body.fechaCompra;
    var puntosGanados = req.body.puntosGanados;
    var puntosUsados = req.body.puntosUsados;
    


  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  reporteAdmin.findOneAndUpdate({puntosGanados: puntosGanados},{$set:{ mesCompra:mesCompra, nombreLibro:nombreLibro, precio:precio, fechaCompra:fechaCompra, puntosGanados:puntosGanados, puntosUsados:puntosUsados   }}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
 var reporteNuevo = new reporteAdmin({

    _id: new mongoose.Types.ObjectId(),
    mesCompra: req.body.mesCompra,
    precio: req.body.precio,
    fechaCompra: req.body.fechaCompra,
    nombreLibro: req.body.nombreLibro,
    puntosGanados : req.body.puntosGanados,
    puntosUsados : req.body.puntosUsadosx   
    });

    reporteNuevo.save()
        .then(
        function(result) {
            res.json(result);
        }
        );
});

module.exports = router;