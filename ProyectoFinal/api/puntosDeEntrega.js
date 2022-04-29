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
  var provincia = req.body.provincia;
  var canton = req.body.canton;
  var Distrito = req.body.Distrito;
  var lat = req.body.lat;
  var long = req.body.long;
  var Direccion = req.body.Direccion;


  

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  puntoDeEntrega.findOneAndUpdate({lat: lat},{$set:{provincia:provincia, canton:canton, Distrito:Distrito, long:long, Direccion:Direccion }}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var puntoDeEntregaNuevo = new puntoDeEntrega({

    _id: new mongoose.Types.ObjectId(),
    provincia: req.body.provincia,
    canton: req.body.canton,
    Distrito: req.body.Distrito,
    lat: req.body.lat,
    long: req.body.long,
    Direccion: req.body.Direccion

  });

  puntoDeEntregaNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;