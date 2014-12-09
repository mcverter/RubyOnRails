/**
 */

var express = require('express');
var mongoose = require('mongoose');
var stylus = require('stylus');
var env = process.env.NODE_ENV || 'development';
var app = express();
var HOME = process.cwd();
function compile(str, path) {
    return stylus(str).set('filename', path)
}

app.set('views', HOME + '/server/views');
app.set('view engine', 'jade');
app.use(stylus.middleware({
        src: HOME + '/public',
        compile: compile
    }));
app.use(express.static(HOME + '/public'));
//app.use(express.logger("dev"));
//app.use(express.bodyparser());
console.log("App is ", app);


mongoose.connect('mongodb://localhost/multivision');

var db = mongoose.connection;
db.on('error', console.error.bind(console, " connection error"));
db.once('open', function callback() {
    console.log('Multivision DB connected')
});
/**
var messageSchema = mongoose.Schema(
    {message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    console.log(messageDoc);
    mongoMessage = messageDoc.message;
});



 */
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

var foo =  Message.findOne();
console.log(foo);
Message.findOne().exec(function(err, messageDoc) {
    if (err) {
        console.error(err);
    }
    else {
        mongoMessage = messageDoc.message;
    }
});

app.get('/partials/:partialPath', function (req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
});


var port = 3030;
app.listen(port);
console.log("Listening to port " + port + "...")