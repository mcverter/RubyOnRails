var mongoose = require('mongoose'),
userSchema = new mongoose.Schema({
  name: String,
    email: {
	type: String,
	unique: true
    },
    createdOn: {
	type: Date,
    default: Date.now
    },
    modifiedOn: Date,
    lastLogin: Date
  
});

mongoose.model('User', userSchema);

var user1 = new User({name: 'Simon'});
var user2 = new User({name: 'Sally'});
console.log(user1.name);
user1.name = 'Simon Holmes';
console.log(user1.name);

user1.save (function(err) {
    if (err) return handleError(err);
});

user2.save (function(err) {
    if (err) return handleError(err);
});


User.findOne({'name':'Sally'}, function(err, user) {
    if (!err) {
	console.log(user);
    }
});



User.find({}, function(err, users) {
    if (!err) {
	console.log(users);
    }
});