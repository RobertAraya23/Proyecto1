var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
var inicioSesionModel = require('../schemas/user.js');

router.post('/register',(req, res)=>{
    const {username, password} = req.body
  
    const user = new User({username, password});
  
    user.save(err =>{
      if(err){
        res.status(500).send('ERROR AL REGISTRAR EL USUARIO')
      }else{
        res.status(200).send('USUARIO REGISTRADO');
      }
    });
  });
router.post('/authenticate',(req, res)=>{
    const{username, password} =req.body;
  
    User.findOne({username}, (err, user)=>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else{
            user.isCorrectPassword(password, (err, result)=>{
            if(err){
            res.satatus(500).send('ERROR AL AUTENTICAR');
            }else if(result){
            res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
            }else{
            res.status(500).send('USUARIO Y/0 CONTRASEÑA INCORRECTA');
            }
        });
        }
    })
});

module.exports = router;