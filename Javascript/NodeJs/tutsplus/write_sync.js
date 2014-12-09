var fs=require("fs");
console.log("Starting");
fs.writeFileSync("write_sync.txt", "Hello sychrnonly world");
console.log("finished");