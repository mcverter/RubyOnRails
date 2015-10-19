/**
 * Created by mitchell on 2/27/14.
 */
var http = require("http");
var fs= require("fs")
console.log("starting");
var config = JSON.parse(fs.readFileSync("config.json"));

host = config.host;
port = config.port;
var server = http.createServer(function (request, response) {
    console.log("request : " + request.url);
    fs.readFile( "./" + request.url, function (error, data){
            if (error) {
                response.writeHead(404, {"Content-type" : "text/plain"});
                response.end("Sorry not founc");

            }
        else {
                response.writeHead(200, {"Content-type" : "text/html"});
                response.end(data);

            }

    });

});
server.listen(port, host, function () {
    console.log("Listening : " + host + port);
});

fs.watchFile("config.json", function() {
    var config = JSON.parse(fs.readFileSync("config.json"));
    server.close();
    host = config.host;
    port = config.port;
    console.log("Now Listening : " + host + port)
    server.listen(port, host, function () {
        console.log("Listening : " + host + port);
    });
});