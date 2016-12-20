var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000)
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});