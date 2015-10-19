
var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express(),
    mongoose=require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();


app.use(function(req, res, next){
    console.log(req.user);
});

require('./server/config/routes')(config);

var port = config.port;
app.listen(port);
console.log("Listening to port " + port + "...");