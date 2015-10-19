
var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    userName: {type: String, required: '{PATH} is required!', unique:true},
    salt: String,
    hashedPW: String,
    roles: [String]
});

var User = mongoose.model('User', userSchema);
function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, "joe");
            User.create({
                firstName: 'hoe',
                lastName: 'moomo',
                userName: 'homo',
                salt: salt,
                pwd: hash,
                roles: ['admin']
            });
            User.create({firstName: 'hoh', lastName: 'nom', userName: 'homonom', salt: salt, pwd: hash});
            User.create({firstName: 'ho', lastName: 'x', userName: 'merryx', salt: salt, pwd: hash});
        }
    });
}
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return hashPwd(this.salt, passwordToMatch) === this.hashedPW;
    },
    hasRole:    function(){
        return this.roles[role].indexOf > 1;
    }
};

