
var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');


app.get('*', function(req, res) {
});

var port = 3030;
app.listen(port);
console.log("Listening to port " + port + "...");