
var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express(),
    stylus = require('stylus'),
    mongoose=require('mongoose');

function compile(str, path){
    return stylus(str).set('filename', path);
}


app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));

app.use(stylus.middleware({src: __dirname + '/public',compile: compile}));
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res){
    res.render('partials' + req.params.partialPath);
});

app.get('*', function(req, res) {
    res.render('index');
});

mongoose.connect('mongodb://localhost/multivision')
db.on('error', console.error.bind('console', 'Connection error ...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

var port = 3030;
app.listen(port);


console.log("Listening to port " + port + "...");