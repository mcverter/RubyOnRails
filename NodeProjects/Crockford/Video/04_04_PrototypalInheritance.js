var singleton = (function() {
    var privateVariable;
    function privateFunction(x){
        return privateVariable;
    }
    return {
        firstMethod: function(a, b) {
            return privateVariable;
        },
        secondMethod: function(c) {
            return privateFunction(c);
        }

    }
}());


function myPowerConstructor(x){
    var that = otherMaker(x);
    var secret = f(x);
    that.privileged = function (){
    }
    return that;
}


function gizmo(id) {
    return {
        id: id,
        toString: function() {
            return "gizmo " + this.id;
        }
    }
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function(testid) {
        return testid === this.id;
    };
    return that;
}


function memoizer(memo, formula) {
    var recur = function(n){
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur,n);
            memo[n]=result;
        }
        return result;
    }
}

var factorial = memoizer([1,1], function(recur, n) {
    return n * recur(n-1);
});

var fibonacci = memoizer([0,1], function(recur, n) {
    return recur(n-1) +  recur(n-2);
});

function loopy() {
    for (var i=0; i<5; i++) {
        div_id = divs[i].id;
        divs[i].onclick = make_handler(div_id);
    }
}

function make_handler(div_id) {
    return function() {
        alert(div_id);
    }
}

