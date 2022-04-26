var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var tarjetas = require('../schemas/tarjeta.js');



router.get('/obtenerTarjetas', function(req, res) {
    tarjetas.find().exec()
        .then(
        function(result) {
            res.json(result);
        }
    );
});

router.post('/buscar', function(req, res) {
    var idUsuario = req.body.idUsuario;
    autorModel.findById(idUsuario).exec()
        .then(
        function(result) {
            res.json(result);
        }
        )
});
module.exports = router;
