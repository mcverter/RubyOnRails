function factorial(n){
    var result = 1;
    while (n>1){
        result *= n;
        n -= 1;
    }
    return result;
}

function factorial2(n){
    return (function(result) {
        while (n > 1) {
            result *= n;
            n -= 1;
        }
        return result;
    }(1));
}


var digit_name = (function() {
    var names = ['zero', 'one', 'two', 'three'];
    return function(n) {
        return names[n];
    }
}());