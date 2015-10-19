var passport = require('./auth');
var mongoose = require('mongoose');

module.export = function() {


    app.post('/login', auth.authenticate);
    app.post('/logout', function(req, res){
        req.logout();
        res.end();
    });

    app.get('/partials/:partialPath', function (req, res) {
        res.render('partials' + req.params.partialPath);
    });

    app.get('/api/users', auth.requiresApiLogin, users.getUser())
    })
    app.post('/api.users', users.createUser());

app.all('/api/*', function(req, res){
    res.send(404);
})
app.put('/api.users', users.updateUser());

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
}