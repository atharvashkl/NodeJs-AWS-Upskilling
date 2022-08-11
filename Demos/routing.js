var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res)
{
    console.log('Request was made ! : ' + req.url);
    if(req.url === '/home' || req.url === '/')
        {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            fs.createReadStream(__dirname + '/index.html').pipe(res);

        }
        else if(req.url === '/noreply')
        {
            res.writeHead(200,{'Content-Type' : 'text/html'});
            fs.createReadStream(__dirname + '/index2.html').pipe(res);
        }
        else if(req.url === '/reply')
        {
            res.writeHead(200,{'Content-Type' : 'text/html'});
            fs.createReadStream(__dirname + '/index3.html').pipe(res);
        }
        });

    // res.end() is used for response. (miscellaneous information)
    // res.end() not used when operating with streamlines.

server.listen(3000, '127.0.0.1'); //spaces within the '' will cause errors
console.log('Now listening to port 3000');
