
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    db = require('./model/db'),
    user = require('./routes/user'),
    project = require('./routes/project')
    ;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'your secret here' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index)
    .get('/user', user.index)
    .get('/user/new', user.create)
    .post('/user/new', user.doCreate)
    .get('/user/edit', user.edit)
    .post('/user/edit', user.doEdit)
    .get('/user/delete', user.confirmDelete)
    .post('/user/delete', user.doDelete)
    .get('/login', user.login)
    .post('/login', user.doLogin)
    .get('/logout', user.doLogout)

    .get('/project/new', project.create)
    .post('/project/new', project.doCreate)
    .get('/project/:id', project.displayInfo)
    .get('/project/edit/:id', project.edit)
    .post('/project/edit/:id', project.doEdit)
    .get('/project/delete', project.confirmDelete)
    .post('/project/delete', project.doDelete)
    .get('project/byuser/:userid', project.byUser)




app.listen(3333, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
