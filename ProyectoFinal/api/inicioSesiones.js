var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
var inicioSesionModel = require('../schemas/inicioSesion.js');



usersCtr.singup = (req,res) =>{
    const errors = []
    const {correoElectronico, contrasenna, confirmaContrasenna } = req.body
    if(contrasenna != confirmarContrasenna){
       errors.push({text: 'Contraseña no valida'})
    }
    if (contrasenna.length < 9){
        errors.push({text: 'Se necesita contraseña con mas de 9 cararcteres '})
    }
    if(errors.length > 0){
        res.render('public/inicioSecion'),{
            error
        }
    } else{
        res.send('singup succesfully')
    }
}
 module.exports = router;