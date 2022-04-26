var express = require('express');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
const editarModel = require('../schemas/puntaje.js');
var router = express.Router();


router.get('/obtenerTodos', (req, res ) => {
  puntajeModel.find({},(err,resultado) => {
    if(err){
      res.json(err)
    }else{
      res.json(resultado)
    }
  })
})

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  puntajeModel.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    )
});
module.exports = router;