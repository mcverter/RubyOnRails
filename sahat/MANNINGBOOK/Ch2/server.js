/**
 * Created by mitchell_verter on 3/16/16.
 */
var http = require('http'),
    path = require ('path'),
    mime = require('mime'),
    fs = require('fs'),
    cache = {};

function send404(response) {
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('Error 404:  resource not found.');
    response.end();
}

function sendFile(response, filePath, fileContents){
    response.writeHead(200, {"Content-Type": mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}


function serveStatic(res, cache, absPath) {
    if (cache[absPath]) {
        sendFile(res, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function (exists) {
            if (exists) {
                fs.readFile(absPath, function (err, data) {
                    if (err) {
                        send404(res);
                    } else {
                        cache[absPath] = data;
                        sendFile(res, absPath, data);
                    }
                });
            } else {
                send404(res);
            }
        });
    }
}

var server = http.createServer(function(req, res){
    var filePath = false;

    if (req.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + req.url;
    }
    var absPath = './' + filePath;
    serveStatic(res, cache, absPath);
});


server.listen(3001, function(){
    console.log("Server listening on port 3001");
});

var chatServer = require ('./lib/chat_server');
chatServer.listen(server);