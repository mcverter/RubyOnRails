/**
 * Created by mitchell_verter on 3/15/16.
 */


function say(filename) {
    var contents = fs.readFileSync(filename);
}


var fs = require("fs");

module.exports.say = say;