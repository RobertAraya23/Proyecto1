var express = require('express');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
const editarModel = require('../schemas/editar.js');
var router = express.Router();


router.get('/obtenerTodos', (req, res ) => {
  editarModel.find({},(err,resultado) => {
    if(err){
      res.json(err)
    }else{
      res.json(resultado)
    }
  })
})

router.post('/buscar', function(req, res) {
  var idUsuario = req.body.idUsuario;
  editarModel.findById(idUsuario).exec()
    .then(
      function(result) {
        res.json(result);
      }
    )
});
module.exports = router;