var flow = require('nimble'),
    exec = require('child_process').exec;

function downloadNodeVersion(version, destination, cb){
    var url = 'http://nodejs.org/dist/node-v' + version + 'tar.gz';
    var filepath = destination + '/' + version + "tgz";
    exec('curl ' + url + '>' + filepath, callback)
}

flow.series([
    function(cb){
        flow.parallel([
            function(cb){
                console.log('downloading node 0.4.6');
                downloadNodeVersion('0.4.6', '/tmp', cb);
            },
            function(cb) {
                console.log('downloading node 0.4.7');
                downloadNodeVersion('0.4.6', '/tmp', cb);
            }
        ], cb);
    },
    function(cb) {
        console.log('creating archive of downloads');
        exec(
            'tar xvf node_distros.tar /tmp/0.4.6.tgz /tmp/04.7.tgz',
            function(error, stdout, stderr) {
                console.log('All done!');
                callback();
            }

        )

    }
]);