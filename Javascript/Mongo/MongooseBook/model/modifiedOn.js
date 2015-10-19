var mongoose = require('mongoose');
module.exports = exports = function modifiedOn(schma, options) {
    schema.add({modifiedOn: Date});
    schema.pre('save', function(next) {
        this.modifiedOn = Date.now();
        next();
    });
};