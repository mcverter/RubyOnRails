> 
undefined
> (function() {return 0})()
0
> (function() {
... return (function() {
..... return true
..... })
... })()()
true
> (function(diameter){return diameter * 3.14})(2)
6.28
> (function() {return[1,2,3]})()
[ 1, 2, 3 ]
> (function(value) {
... return (function(copy) {
..... return copy === value
..... })(value)
... })(15)
true
> (function(x) {
... return function(y) {
..... return x
..... }
... })(1)(2)
1
> (function(x) {
... return function(y) {
..... return x
..... }
... })(1)
[Function]
> (function(pi) {
... return function(diameter) {
..... return diameter * pi
..... }
... })(3.14)(2)
6.28
> function repeat(num, fn) {
... var i, value;
... for (i=1; i<=num; ++i) {
..... value = fn(i);
..... }
... return value;
... }
undefined
> repeat
[Function: repeat]
> repeat(3, function () {
... console.log('Hello')
... })
Hello
Hello
Hello
undefined
> function compose (a, b) {
... return function(c) {
..... return a(b(c))
..... }
... }
undefined
> function addOne(number) {
... return number + 1;
... }
undefined
> function doubleOf(number) {
... return number *2 ;
... }
undefined
> function doubleOfAddOne(number) {
... return doubleOf(addOne(number))
..... }
... 
... }
... 
... ;
... 
> function doubleOfAddOne(number) {
... return doubleOf(addOne(number))
... }
undefined
> var doubleOfAddOne = compose(doubleOf, addOne);
undefined
> function not (fn) {
... return function (argument) {
..... return ! fn(argument)
..... }
... }
undefined
> function squareALl(array) {
... return _.map(array, function(n){return n*n})}
undefined
> function plus(a,b) {
... return arguments[0]+ arguments[1];
... }
undefined
> plus(2,3)
5
> 