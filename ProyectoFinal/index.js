var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();


//Mongodb connection
mongoose
.connect('mongodb+srv://Ucenfo123:Robert0323@cenfoproyecto.nbwow.mongodb.net/ElBazarDeLasSorpresas?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})


//middleware

app.use(express.json());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/libros', require('./api/libross.js'));
app.use('/perfilLibro', require('./api/libros.js'));
app.use('/editarPerfil', require('./api/editars.js'));
app.use('/datosUsuario', require('./api/datosUsuarios'));
app.get('/api/users',function(req,res){
  serials.getUser(req, res, function(err, data) {
      res.send(data);
  });
});


app.listen(8080, function(){
  console.log("Servidor arriba en 8080");
});