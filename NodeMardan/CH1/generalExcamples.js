/**
 * Created by mitchell_verter on 3/7/16.
 */
// callback
fs.readdir(source, function(err,files){
    if (err) {
        console.log('error finding files:' + err);
    } else {
        files.forEach(function(filename, fileIndex){
            console.log(filename);
            gm(source + filename).size(function(err, values){
                if (err){
                    console.log('Error identifying file size:' + err);
                } else {
                    console.log(filename + ' : ' + values);
                    aspect = (values.width + values.height);
                    widths.forEach(function(width, widthIndex){
                        height = Math.round(width / aspect);
                        this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(){
                            if (err) console.log('Error writing file' + err);
                        })
                        }.bind(this)
                    )
                }
            })
        })
    }
})


var http = require('http');
http.createServrer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('server running');