var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
var datosUsuario = require('../schemas/datosUsuario.js');

router.get("/", function(req, res) {
    datosUsuario.find().exec()
    .then(function(result){
        res.json(result);
    });
});

router.post('/insertarDatosUsuario', function(req, res) {
    var datosUsuarioNuevo = new datosUsuario({
      
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaDeNacimiento: req.body.fechaDeNacimiento,
      correoElectronico: req.body.correoElectronico,
      contrasenna: req.body.contrasenna,
      puntaje: req.body.puntaje
    });
  
    datosUsuarioNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
      )
  });

  router.post('/inicioSesion', function(req, res) {
    var correoElectronico = req.body.correoElectronico;
    var contrasenna = req.body.contrasenna;

    datosUsuario.find({"correoElectronico": correoElectronico, "contrasenna": contrasenna}).exec()
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
    var puntaje = req.body.puntaje
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    datosUsuario.findOneAndUpdate({nombre: nombre},{$set:{apellido:apellido, fechaDeNacimiento:fechaDeNacimiento, correoElectronico:correoElectronico, contrasenna:contrasenna, puntaje:puntaje}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });
  
  router.post('/buscar', function(req, res) {
    var idUsuario = req.body.idUsuario;
    datosUsuario.findById(idUsuario).exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports = router;