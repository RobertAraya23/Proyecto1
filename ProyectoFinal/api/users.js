var express = require('express');
const { is } = require('express/lib/request');
var mongoose = require('mongoose');
const { restart } = require('nodemon');
var router = express.Router();
var inicioSesionModel = require('../schemas/user.js');




module.exports = router;