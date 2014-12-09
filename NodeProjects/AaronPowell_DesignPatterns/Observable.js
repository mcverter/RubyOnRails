var Book = function(name, price){
    var priceChanging = [],
        priceChanged = [];
    
    this.name = function(val){
        return name;
    };
    this.price = function(val) {
        var that = this;
        if (val !== undefined && val !== price) {
           for (var i=0;i<priceChanging.length;i++){
               if (!priceChanging[i](that, val)){
                   return price;
               }
           }
            price = val;
            for (var i =0; i<priceChanged.length; i++) {
                priceChanged[i](that);
            }
        }
        return price;
    };

    this.onPriceChanging = function(callback){
        priceChanging.push(callback);
    };
    this.onPriceChanged = function(callback){
        priceChanged.push(callback);
    };
};

var book = new Book('Dreams of Freedom', 15.75);
console.log('the name is ' + book.name());
console.log('the price is $' + book.price());

book.onPriceChanging(function(b, price){
    console.log('the price is changing to ' + price);
    if (price > 100){
        console.log('error: price too high');
        return false;
    }

    return true;
});

book.onPriceChanged(function(b){
    console.log("The book has changed to $" + b.price);
});

book.price(19.99);
book.price(200);