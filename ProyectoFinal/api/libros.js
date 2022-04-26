var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
var libroModel = require('../schemas/libro.js');


router.get('/obtenerTodos', (req, res ) => {
  libroModel.find({},(err,resultado) => {
    if(err){
      res.json(err)
    }else{
      res.json(resultado)
    }
  })
})

router.post('/buscar', function(req, res) {
  var nombre = req.body.nombre;
  libroModel.findOne({"nombre": nombre}).exec()
    .then(
      function(result) {
        res.json(result);
      }
    )
})

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
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  libroModel.findOneAndUpdate({nombre: nombre},{$set:{precio:precio, disponibilidad:disponibilidad, fechaDePublicacion:fechaDePublicacion, formato:formato, genero:genero, resenna:resenna, ism:ism, editorial:editorial, premiosEnHonor:premiosEnHonor}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var libroNuevo = new libroModel({
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
