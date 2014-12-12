
var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express(),
    stylus = require('stylus');

function compile(str, path){
    return stylus(str).set('filename', path);
}


app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));

app.use(stylus.middleware({src: __dirname + '/public',compile: compile}));
app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
});

var port = 3030;
app.listen(port);
console.log("Listening to port " + port + "...");