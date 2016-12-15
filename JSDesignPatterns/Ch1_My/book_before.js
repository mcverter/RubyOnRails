/**
 * Created by mitchell_verter on 4/8/16.
 */

var Book = function(name, price) {
    this.name = function(val) {

    };
    this.price = function(val) {

    };
    this.onPriceChanging = function(cb){

    };
    this.onPriceChanged = function(cb) {

    };
};

var book = new Book('js good parts', 23.00);
console.log('name ', + book.name() + ' price ' + book.price());

book.onPriceChanging(function(b, price){
    if (price > 100) {
        console.log('no way.  too high');
        return false;
    }
    return true;
});

book.onPriceChanged(function(b){
    console.log('price changed to $ ' + b.price());
});

book.price(18.88);

book.price(200);