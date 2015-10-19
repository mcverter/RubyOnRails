var fs=require('fs');
console.log('starting');
var content = fs.readFile('./files/sample.txt');
console.log("contents" + content);
console.log('carry on.');