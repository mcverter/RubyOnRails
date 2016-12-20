setTimeout(function(){
    console.log('I execute first');
    setTimeout(function(){
        console.log('I execute next');
        setTimeout(function(){
            console.log('I execute last');
        }, 100);
    }, 500);
}, 1000);


var flow = require('nimble');

flow.series([
    function(cb){
        setTimeout(function(){
            console.log('I execute first');
            cb();
        }, 1000)
    },
    function(cb){
        setTimeout(function(){
            console.log('I execute next');
            cb();
        }, 1000)

    },
    function(cb){
        setTimeout(function(){
            console.log('I execute last');
            cb();
        }, 1000)
    }
])