var fs=require("fs");
console.log("Starting");
fs.writeFile ("write_async.txt", "hello asynchronous", 
	      function (error) {
	     	  console.log("written file");
});

console.log("finished");
