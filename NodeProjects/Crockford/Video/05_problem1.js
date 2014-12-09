var identity = function identity(p){
    return p;
};

    var add = function add(a, b) {
        return a+b;
};

var mul = function mul(a,b){
    return a*b;
};

var idf = function identityf(x){
    return identity(x);
};

var idff = function idff(x) {
    return function() {
        return x;
    }
};

 var addf = function addf(x) {
     return function (y) {
         return x + y;
     };
 };


var applyf = function applyf(fun){
    return function(x) {
        return function(y) {
           return fun(x,y);
        }
    };
}

var curry1 = function curry1(fun, x){
    return function(y){
        return fun(x,y);
    }
}

function curry2(func, first){
    return applyf(func)(first);
}

function curry(func) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments,1);
    return function() {
        return func.apply(
            null,
            args.concat(slice.call(arguments,0)));
    }
}

inc=addf(1);
inc=curry1(add, 1);
inc=applyf(add)(1);


function methodize(func) {
    return function (y){
        return func(this, y);
    }

}

function demethodize (meth){
    var that = this;
    return function(that, y) {
        return meth.apply(that, y);
    }
}

function twice(func){
    return function(x) {
        return func(x,x);
    }
};

function composeu (f1, f2) {
    return function(x) {
        return f2(f1(x));
    }
}

function composeb(f1, f2){
    return function(a, b, c){
        return f2(c, f1(a,b));
    }
}

function counterf(x){
    return {
        inc: function() {
            x += 1;
            return x;
        },
        dec: function() {
            x -= 1;
            return x;
        }
    }
}

function once(func) {
    return function() {
        var f = func;
        func = null;
        return f.apply(this, arguments);
    };
}

function revocable(func) {
    var f = func;
    return {
        invoke: function(){
            return f.apply(this, arguments);
        },
        revoke: function() {
            f = null;
        }
    }
}