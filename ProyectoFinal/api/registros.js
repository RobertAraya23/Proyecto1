var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
var libroModel = require('../schemas/registro.js');
const bodyParser = require('body-parser')


router.post('/sign_up', function(req,res){
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos
    var fechaDeNacimiento = req.body.fechaDeNacimiento
    var correoElectronico =req.body.correoElectronico;
    var password = req.body.password;
    var administrador =req.body.administrador;
  
    var data = {
        "nombre": nombre,
        "apellidos":apellidos,
        "fechaDeNacimiento":fechaDeNacimiento,
        "correoElectronico":correoElectronico,
        "password":password,
        "administrador":administrador,
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
    //REVISAR ESTO DE AQUI      
    return res.redirect('signup_success.html');
});
module.exports = router;