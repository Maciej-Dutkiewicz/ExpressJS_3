var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});
app.get('/', function (req, res) {
   res.send('Hellow World')
});
app.get('/store', function (req, res) {
   res.send('Sklep')
});
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});