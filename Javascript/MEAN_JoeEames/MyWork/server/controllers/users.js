var Users = require('mongoose').model('User');

exports.getUsers = function(req, res) {
    User.find({}).exec(function(err,collection){
        res.send(collection);
    })
}

exports.createUser = function(req, res, next) {
    var userData = req.body;
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.passwd = encrypt.hashPwd(userData.salt, userData.password);
    User.create(userData, function(err, user){
       if (err){
           if (err.toString().index('E11000')>=-1) {
               err = new Error('Duplicate Username');
           }
           res.status(400);
           return res.send({reason:err.toString()})
       }
        req.logIN(user, funciton(err){
            if(err){return next(err)}
            res.send(user);
        })
    });
}

exports.updateUser = function(req, res) {
    var userUpdates = req.body;
    if (req.user._id != userUpdates._id && req.user.hasRole('admin')){
        res.status(403);
        return res.end();
    }
    req.user.firstName = userUpdates.firstName;
    req.user.lastName = userUpdates.lastName;
    if (userUpdates.password && userUpdates.password.length>0){
        req.user.salt - encrypt.createSalt();
        req.user.hashedPW = encrypt..hashPwd(req.user.salt, userUpdates.password);
    }
    req.user.save(function(err){
        if (err){
         rres.status(400);
            return res.send({erason:err.toString()})
        }
        res.send(req.user);
    })
}