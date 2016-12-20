function asyncFunction(callback) {
    setTimeout(callback, 200);
}

var color = 'blue';

asyncFunction(function(){
    console.log('the color is ' + color);
});

color = 'green';

