var express =require('express');
var fs = require('fs');
var time = require('strftime')

var app = express();

let port = process.argv[2];

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

app.get('/', function(req,res)
{
    res.send('Hello World !')
});

app.get('/time1', function(req,res)
{
    res.send(time('%h:%m:%s'));
}); //using strftime

app.get('/time', function(req,res)
{
    var date = new Date();
    var newDate = date.toISOString()
    res.send(newDate);
}); // ISO format



