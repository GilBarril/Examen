var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index');
});


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


app.listen(port, function(){
    console.log('Tu aplicacio esta executant-se en el port: ' + port);
});