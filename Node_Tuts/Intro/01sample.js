var fs = require("fs");
console.log("Starting node");
fs.readFile("sample.txt", function(err, data){
  console.log("contents of file: ", data);
});
console.log("Carry on");