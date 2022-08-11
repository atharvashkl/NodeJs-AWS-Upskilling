var express =require('express');
var fs = require('fs');

var app = express();

let port = process.argv[2];

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

app.get('/home', function(req,res)
{
    res.send('Hello World !')
});


