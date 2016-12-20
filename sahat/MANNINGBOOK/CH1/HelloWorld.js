var http = require('http');
http.createServer(function(req, req){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000);
console.log("Server running");


var stream = fs.createReadStream('./resource.json')
stream.on('data', function(chunk){
    console.log(chunk);
});

stream.on('end', function(){
    console.log('finished');
});