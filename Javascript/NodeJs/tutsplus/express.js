 /**
 * Created by mitchell on 2/27/14.
 */
fs=require("fs");
var config = JSON.parse((fs.readFileSync("config.json")));
var host = config.host;
var port = config.port;
var express = require("express");
var app = express.createServer();
app.use(app.router);
app.use(express.static(__dirname + "/static"));
app.get("/", function (request, response) {
    response.send("hello!");
});
app.listen(port, host);

 var users = {
    "1" : {
        "name" : "mooshoo",
        "twitter" : "docsmock"
    },
     "2" : {
         "name" : "fleabag",
         "twitter" : "fluesmell"
     }
 }
app.get("/hello/:text", function (request, response) {
       response.send("Hello " +  request.params.text);

});

 app.get("/user/")