



/*********************************angular**********************************/


var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use("/api/productes",require("./controllers/api/producte"));

app.use("/",require("./controllers/static"));

var options = {
    root: __dirname + "/layouts"
};

/* aqui especifiques el layout que en aquest cas és examen.html*/
app.get('/',function(req, res){
    res.sendFile("producte.html",options);
});

app.listen(port, function() {
    console.log('Server listening on',port);
});




/**************************************************************************/

/*
 app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index');
});
 
var express = require('express');
var app = express();
 
 
app.get('/ClicarBoles', function(req, res) {
    res.render('a1-1-5');
});
app.get('/Quadrats', function(req, res) {
    res.render('quadrats');
});

app.get('/Questions', function(req, res) {
    res.render('Questions');
});

app.get('/Viatges', function(req, res) {
    res.render('viatges');
});

app.get('/ViatgesGimenez', function(req, res) {
    res.render('ViatgesGimenez');
});

app.get('/Fotos', function(req, res) {
    res.render('fotos');
});

app.get('/Fotos-Google', function(req, res) {
    res.render('fotos-google');
});

app.get('/receptes', function(req, res) {
    res.render('receptes');
});

app.listen(port, function(){
    console.log('Tu aplicacio esta executant-se en el port: ' + port);
});*/