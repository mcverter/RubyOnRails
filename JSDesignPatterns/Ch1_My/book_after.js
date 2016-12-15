/**
 * Created by mitchell_verter on 4/8/16.
 */

var Book = function(name, price) {
    var priceChangingCallbacks = [];
    var priceChangedCallbacks = [];

    this.name = function(val) {
        if (val && name !== val) {
            name = val;
        }
        return name;

    };
    this.price = function(val) {
        var i, il;
        if (val && price !== val) {
            for (i=0, il = priceChangedCallbacks.length; i< il; i++){
                if (!priceChangingCallbacks[i](this,val)) {
                    return price;
                }
            }
            price = val;

            for (i=priceChangedCallbacks.length-1; i>=0;i--) {
                priceChangedCallbacks[i](this);
            }
        }
        return price;
    };
    this.onPriceChanging = function(cb){
        priceChangingCallbacks.push(cb);
    };
    this.onPriceChanged = function(cb) {
        priceChangedCallbacks.push(cb);
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