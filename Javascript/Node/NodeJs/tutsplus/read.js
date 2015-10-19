var fs=require('fs');
console.log('starting');
fs.readFile('./files/sample.txt', function (error, data) {
    console.log('contents: ' + data);
});
console.log('carry on.');