var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express();

app.configure(function() {
   app.set('views', __dirname + '/server/views');
    app.set('view_engine', 'jade');
});

app.get('*', function(req, res){
    res.render('index');
});

var port = 3000;
app.listen(port);
console.log("Listening on port " + port);