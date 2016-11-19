/**
 * Created by mitchell_verter on 9/10/15.
 */

console.log(typeof 4.5);
console.log(typeof 'x');


var x = 'outside';
var f1 = function(){
    var x = 'inside f1';
}

f1();

console.log(x);

var landscape = function()