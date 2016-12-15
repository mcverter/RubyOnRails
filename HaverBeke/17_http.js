/**
 * Created by mitchell_verter on 8/10/16.
 */
var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", false);
req.send(null);
console.log(req.responseText);
console.log(req.status, req.statusText);
console.log(req.getResponseHeader("content-type"));



var req2 = new XMLHttpRequest();
req2.open("GET", "example/data.txt", true);
req2.addEventListener("load", function(){
    console.log("Done:", req2.status);
    console.log(JSON.parse(req2.responseText));
});
req2.send(null);

function backgroundReadFile (url, cb) {
    var req = new XMLHttpRequest();
    req.open ("GET", url, true);
    req.addEventListener("load", function(){
        if (req.status < 400) {
            cb(req.responseText);
        }
    })
    req.send(null);
}

function getURL(url, cb) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function (){
        if (req.status < 400) {
            cb(req.responseText)
        } else {
            cb(null, new Error("ReQUEST FAILED: " + req.statusText));
        }
    })
    req.addEventListener("error", function(){
        cb(null, new Error("Network error"));
    })
    req.send(null);
}

getURL("data/nonsense.txt", function (content, error) {
    if (error != null) {
        console.log("Failed to fetch file: " + error)
    } else {
        console.log("file contents: " + content);
    }

});

function get(url) {
    return new Promise(function (succeed, fail){
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.addEventListener("load", function() {
            if (req.status < 400) {
                suceed(req.responseText);
            } else {
                fail(new Error("Request failed: " + req.status));
            }
        })
        req.addEventListener("error", function(){
            fail(new Error("Network error"));
        })
        req.send(null);
    })
}

get("example/data.txt").then(
    function(text) {
        console.log("data text: " + text);
    }, function(error) {
        console.log("error oops" + error);
    });

function getJSON(url) {
    return get(url).then(JSON.parse);
}

function showMessage(msg) {
    var elt = document.createElement("div");
    elt.textContent = msg;
    return document.body.appendChild(elt);
}

var loading = showMessage("Loading... ");

getJSON("example/bert.json").then (function(bert){
    return getJSON(bert.spouse)
}).then(function(spouse){
    return getJSON(spouse.mother);
}).then(function(mother) {
    showMessage("THe name is" + mother.name);
}).catch(function(error){
    showMessage(String(error))
}).then(function(){
    document.body.removeChild(loading);
})