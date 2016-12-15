function printHelp(){
    console.log("hello1.js MitchellVerter")
    console.log("Usage:  ");
    console.log("--help     use this help");
    console.log("--name     say hello to {MAME}")

}



var args = require('minimist')(process.argv.slice(2),
    {string: "name"});

console.log("Hello World");
process.stdout.write("Hello from Process");

var name = process.argv[2]
console.log("Hello " + name);

var n2 = args.name;

console.log("hello from minimist  " + n2);

if (args.help || !args.name){
    printHelp();
    process.exit(1)
}


var hello = require ("./2.js")

contents = hello.say(args.file);

console.log(contents.toString());