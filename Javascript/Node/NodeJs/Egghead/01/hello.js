/**
 * Created by mitchell on 2/27/14.
 */
var http = require('http');
http.createServer (function (request, response){
    response.writeHead(200);
    response.write("dog is running");
    setTimeout(function() {
        response.write("Dog is done")
        response.end();
    }, 5000);

}).listen(7000);

console.log("listening on port 7000");