var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('index');
});


app.get('/hola', function(req, res) {
    res.render('a1-1-5');
});

app.listen(port, function(){
    console.log('Tu aplicacio esta executant-se en el port: ' + port);
});