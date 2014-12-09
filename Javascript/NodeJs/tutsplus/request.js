/**
 * Created by mitchell on 2/27/14.
 */
var https = require("https");

function getRepos(username, callback) {

    var options = {
        host : 'api.github.com',
        path : '/users/' + username + '/repos',
        method : "GET"
    };

    var request = https.request(options, function (response) {
        var body = '';
        console.log(options);
        response.on('data', function (chunk) {
            body += chunk.toString("utf8");
        });
        response.on("end", function() {
            var json = JSON.parse(body);
            var repos = [];
            json.forEach (function (repo) {
                repos.push({                    name: repo.name,
                    description : repo.description
                }) ;
            });
            callback(repos);
//        console.log("Count", json.length);
//        console.log("Body: ", body);
        });
    });
    request.end();
}

getRepos("mcverter", function(repos) {
    console.log("Ollie has " + repos.length + " repos ");
});