var express = require('express');

var app = express();

app.listen(3000);

app.get('/', function(req,res)
    {
        res.send('This is the homepage');
    }
);
app.get('/contact', function(req,res)
    {
        res.send('This is the contact page');
    }
);
console.log("Now Listening on 3000");