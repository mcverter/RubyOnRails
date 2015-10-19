function log() {
  var  __slice = Array.prototype.slice;
  var args = Array.prototype.slice.call(arguments, 0);
  args.unshift('(app)');
  console.log.apply(console, args)
}

function newAdd(x) {
  return function(y){
    return x +y;
  }
}
log('hello world');
log('hello', 'world');
console.log(newAdd(2)(5));

function fib(x){
  if (x<2){
    return x;
  } else {
    return fib(x-1) + fib(x-2);
  }
}

function fastfib(x){
  lookups = [0,1]
  if (lookups[x]){
    return lookups[x];
  }
  else {
    var val = fastfib(x-1)+ fastfib(x-2)
    lookups[x] = val;
    return val;
  }
}
console.log(fib(6));

var fibonacci = (function () {
  var compute,
    init;

  compute = function (length) {
    // TODO: Implement Fibonacci sequence.
    return [1, 2, 3];
  };

  init = function () {
    var button = document.getElementById('compute');
    button.addEventListener('onclick', function () {
      var length = parseInt(document.getElementById('length').value, 10),
        result;

      console.log(
        'Computing Fibonacci sequence of length ' + length + '.'
      );

      result = compute(length);
      document.getElementById('result').innerText = result.join(', ');
    });
  };

  return {
    compute: compute,
    init: init
  };
}());


a = {
  c: 5,
  d: 6,
  e: 7
};
b = {
  c: 5,
  d: 6,
  f: 6
}

function compareObjects(a,b){
  var aProps = Object.getOwnPropertyNames(a),
    bProps = Object.getOwnPropertyNames(b);
  if (aProps.length != bProps.length){
    return false;
  } else {
    for (var i=0; i< aProps.length; i++){
      var prop = aProps[i]
      if(a[prop] !== b[prop]){
        return false;
      }
    }
  }
  return true;

  for (var prop in a) {
    console.log(prop);
    if (a[prop] !== b[prop]) {
      return false;
    }
    return true;
  }
}

console.log(compareObjects(a,b));

Date.prototype.nextDay = function() {
  return new Date(this + 1);
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

Array.prototype.duplicator = function() {
  return this.concat(this);
}

Function.prototype.bind = function(ctx) {
  var fn = this;
  return function() {
    fn.apply(ctx, arguments);
  };
};

function isTwo(){
  var len = arguments.length;
  for (var i=0; i<len; i++){
    if (arguments[i]===2 ) {
      return true;
    }
  }
  return false;
}
var array = [4,1,2];
console.log('max is ', Math.max.apply(null, array));

console.log('is two ', isTwo(4,4));

function larp(str){
  var args = Array.prototype.slice.call(arguments);

  console.log('(app)', str);
  console.log.apply(console, ['(app)', str]);
}


var foo = "Hello";
(function() {
  var bar = " World";
  console.log(foo + bar);
})();
//console.log(foo + bar);
var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length);


var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);

function fizzbuzz() {
  for (var i=1; i<=100;i++) {
    if (i%15) {
      console.log(i , 'Fizzbuzz')
    } else     if (i%3) {
      console.log(i , 'Fizz')
    } else     if (i%15) {
      console.log(i , 'Buss')
    } else {
      console.log(i);
    }


  }
}


function removeDups(str) {
  var len = str.length,
    i= 0,
    strbuf = '',
    allchar = [],
    charval,
    char;
  for (;i<len;i++) {
    if (allchar[str.charCodeAt(i) - 'a'.charCodeAt(0)]){
    } else {
      strbuf = strbuf + str.charAt(i);
      allchar[str.charCodeAt(i) - 'a'.charCodeAt(0)] = true;
    }
  }
  return strbuf;
}

console.log(removeDups('tree traversal'));

function getDivisors(num){
  var divs = [],
    i;
  for (i=0; i<Math.sqrt(num); i++) {
    if (num % i) {
      divs.push(i).push(num/i);
    }
  }
}

function checkSubsums(div, num){};

function checkRoom(num) {
   var divs = getDivisors(num);
}


function findRoom() {
  for (var i = 0; i<100; i++){
    checkRoom(i);
  }
}

function isPrime(num){
  for (var i=2; i<=sqrt(num); i++){
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}
function findPrimeFactors(num){
  var sqrt = Math.sqrt(num),
    factors=[num],
    i=2;
  for (;i<=sqrt;i++) {
    if (num % i == 0) {
      if (isPrime(i)) {
        factors.append(i)
      }
    }
  }
}
function findDivisors(num) {
  var divisors = [];
  for (var i=2; i<Math.sqrt(num); i++) {
    if (num % i == 0) {
      divisors.push[i];
    }
  }
  return divisors;
}
function findGCD(a, b) {
  var divA = findDivisors(a);
  var divB = findDivisors(b);
}

function mergeSortedArrays(a,b) {
  var aLen = a.length,
  bLen = a.length,
    aIdx= 0,
    bIdx = 0,
    output = [];
  while(aIdx < aLen && bIdx < bLen) {
    if (a[aIdx] < b.Idx){
      output.push(a[aIdx])
      aIdx++;
    } else {
      output.push(b[bIdx])
      bIdx++;
    }
  }
  if (aIdx == aLen -1){
    while(bIdx<bLen){
      output.push(b[bIdx++])
    }
  }
  else {
    while(bIdx<bLen){
      output.push(a[aIdx++])
    }
  }
  return output;
}

function swapWithoutTemp(a, idx1, idx2) {

}

function reverseWords(string){
  var arr = string.split(' ');
  for (var i=0; i<arr.length; i++) {
    var temp;
    //swap
  }
  return arr.join(' ');
}

function reverseWord(arr, start, end) {
  while(start != end){
    arr[start] = arr[end];
  }
}

function reverseInPlace(string) {
  var i = 0,
    start = 0;
  end = 0;
  while (i != string.length) {
    if(string.charAt(i)==' ') {
      end = i-1;
      reverseInPlace(string, start, end)
      start = i+1
    }
    i++;
  }
}

function nonRepeat(str) {
  var i=0;
  chars = {}
  for (; i <str.length; i++) {
    var char = str.charAt(i);
    if (! char in chars) {
      chars[char] == i;
    }
  }
}


function findPairSum(arr){
  var i,
    oSum,
    needNums={};
  for (i=0;i<arr.length;i++) {
    if (arr[i] in needNums) {
      return arr[i] + sum-arr[i];
    } else {
      needNums[sum-arr[i]] = true;
    }
  }
}

function stack(){
  this.add = Array.prototype.shift.call(this);
  this.remove = Array.prototype.unshift.call(this);
  return this;

}


function once(fn){
  var once = false;
  return function(){
    if(once) {
      fn.apply(this.arguments);
    }
    once=true;
  }
}


function numberFormat(num) {
  var strbuf = '';
  var idx=1;
  while(num != 0) {
    var digit = num % 10;
    num /= 10;
    if (idx %3 == 0 ) {
      strbuf =  digit + ',' + strbuf;
    } else {
      strbuf = digit + strbuf;
    }
  }
}


function nextHighest(num) {
  var strArr = ('' + num).split('');
  var len = strArr.length;
  var highLeft = false;
  for (var i = len-1; i>=0;i--) {
    for (var j = i-1; j>=0;j++) {
      if (strArr[j]>strArr[i]) {
        swapWithoutTemp();
        break;
      }
    }
  }
return parseInt(strArr.join(''));
}

function wordPos (string, haystack){
  haystack = '' + haystack;
  haystack.
  var haystack.split(' ');
}