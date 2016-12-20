var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    getTitles(res);
}).listen(8101, "127.0.0.1");

function getTitles(res) {
    fs.readFile('./titles.json', function (err, data) {
        if (err) return hadError(err, res);
        getTemplates( JSON.parse(data.toString()), res);
    })
}

function getTemplates(titles, res) {
    fs.readFile('./template.html', function (err, data) {
        if (err) return hadError(err, res);
        formatHTML(titles, data.toString(), res);
    });
}

function formatHtml(titles, tmpl, res) {
    var html = tmpl.replace('%', titles.join('</li><li>'))
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

function hadError(err, res) {
    console.error(err);
    res.end('Server Error');
}
