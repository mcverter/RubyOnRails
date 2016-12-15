var http = require('http');
var host = "localhost";
var port = 8006;

var http_srv = http.createServer(handleHTTP).listen(port, host);

function handleHTTP(req, res){
    res.end("Hello wyrld");

}