//EXECUTE A CONNECTION TO A SERVER AND SHOW SUCCESS MESSAGE
var http = require('http');
var server = http.createServer(function(req,res)
{
    console.log('Request was made' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello');
});

server.listen(3000 , '127.0.0.1'); //3000 is port number and IP is localhost
console.log('Success ! Now listening');