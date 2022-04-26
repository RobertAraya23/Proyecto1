var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var usuarios = require('../schemas/usuario.js');



router.get('/obtenerUsuarios', function(req, res) {
    usuarios.find().exec()
        .then(
        function(result) {
            res.json(result);
        }
    );
});
module.exports = router;