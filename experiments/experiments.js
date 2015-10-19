function log(arg) {
   var  __unshift = Array.prototype.unshift;
    console.log.apply(console, __unshift('(app) ',arguments))
}
log('hello world');

log('hello', 'world');