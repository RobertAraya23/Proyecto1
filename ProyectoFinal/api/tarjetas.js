var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var tarjeta = require('../schemas/tarjeta.js');

router.get('/', function(req, res) {
  tarjeta.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  tarjeta.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});


//FUNCION PARA BUSCAR POR NOMBRE DE tarjeta
router.post('/buscarNombre', function(req, res) {
  var nombre = req.body.nombre;
  
  tarjeta.find({ nombre:{'$regex' : nombre, '$options' : 'i'}}).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});


router.post('/buscarGenero', function(req, res) {
  var genero = req.body.genero;
  
  tarjeta.find({ genero:{'$regex' : genero, '$options' : 'i'}}).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});


router.post('/buscarAutor', function(req, res) {
  var nombreAutor = req.body.nombreAutor;
  
  tarjeta.find({ nombreAutor:{'$regex' : nombreAutor, '$options' : 'i'}}).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});



router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var precio = req.body.precio;
  var disponibilidad = req.body.disponibilidad;
  var fechaDePublicacion = req.body.fechaDePublicacion;
  var formato = req.body.formato;
  var genero = req.body.genero;
  var resenna = req.body.resenna;
  var ism = req.body.ism;
  var editorial = req.body.editorial;
  var premiosEnHonor = req.body.premiosEnHonor;
  var descuento = req.body.descuento


  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  tarjeta.findOneAndUpdate({nombre: nombre},{$set:{precio:precio, disponibilidad:disponibilidad, fechaDePublicacion:fechaDePublicacion, formato:formato, genero:genero, resenna:resenna, ism:ism, editorial:editorial, premiosEnHonor:premiosEnHonor, descuento:descuento }}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var tarjetaNuevo = new tarjeta({

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
    nombreAutor: req.body.nombreAutor,
    idAutor: req.body.idAutor,
    descuento: req.body.descuento


  });

  tarjetaNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;