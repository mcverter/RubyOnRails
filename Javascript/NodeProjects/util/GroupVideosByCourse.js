/**
 * Created by mitchell on 9/1/2014.
 */

var fs = require('fs');
var BASEDIR = 'c:\\ComputerScience_Windows\\AUDIO';
fs.exists(BASEDIR, function(err, data){
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

function addCourseTitleToVideos(subdir, courseTitle) {
    var files = [],
        fullDirPath = BASEDIR + "/" + subdir;

    function processFiles() {
        for (var i=0; i<files.length; i++) {
            var oldFilePath = fullDirPath + "/" + files[i];
            var newFilePath = fullDirPath + "/" +
                courseTitle + "_" + files[i];
            fs.renameSync(oldFilePath, newFilePath);
        }
    }

    fs.readdir(fullDirPath, function(err, data) {
        if (err){
            console.log(err)
        }
        else {
            files = data;
            processFiles();
        }
    });    
}

function flattenMoviePaths(){

}

// main
addCourseTitleToVideos('tutsPHPtest',
    'TutsPhpTest');
