var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var libro = require('../schemas/pedidoUsuario.js');

//FUNCION PARA BUSCAR POR MES UN PEDIDO
router.post('/buscarMes', function(req, res) {
    var mesCompra = req.body.mesCompra;
    
    libro.find({ mesCompra:{'$regex' : mesCompra, '$options' : 'i'}}).exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.get('/', function(req, res) {
    pedido.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });


