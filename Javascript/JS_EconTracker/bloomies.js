var tickers = [];

var tickerLabel = document.createElement('label');
tickerLabel.innerHTML = "Ticker"

var tickerInput = document.createElement('input');
tickerInput.id = "tickIn";

var volumeLabel = document.createElement('label');
volumeLabel.innerHTML = "Volume";

var volumeInput = document.createElement('input');
volumeInput.id = "volIn";

var submitTicker = document.createElement('button');
submitTicker.innerHTML = 'Submit'

submitTicker.addEventListener('click', function(){
  addStock( tickerInput.value,
    parseInt(volumeInput.value));
});

var content = document.createElement('table');
document.body.appendChild(content);

function clearTable(){
  var children = content.childNodes,
    numChildren = children.length -1;
  for (var i= numChildren; i >=0; i-- ) {
    content.removeChild(children[i]);
  }
}

function addStock(name, qty){
  var idx = _.findIndex(tickers, function(tick){
    return tick.ticker === name;
  });
  if (idx === -1){
    tickers.push(new Ticker(name, qty));
  }
  else {
    tickers[idx].addVolume(qty);
  }
  tickers.sort(function(a, b){
      if (a.volume < b.volume) {
        return -1
      }
      return 1
    }
  );
  clearTable();
  tickers.forEach(function(tick){
    tick.draw();
  })
}

function Ticker(ticker, volume){
  this.ticker = ticker;
  this.volume = volume;
}

Ticker.prototype.draw = function (){
  var row = document.createElement('tr')
  var tick = document.createElement('td')
  tick.innerHTML = this.ticker;
  var vol = document.createElement('td');
  vol.innerHTML = this.volume;
  content.appendChild(row);
  row.appendChild(tick);
  row.appendChild(vol);
}

Ticker.prototype.addVolume = function (num){
    this.volume += num;
  }








  function validateTickerInput(input){
     if (str.match(nonstring)) {
     return false
     }
     else {
     return input()
     }
     }
     function validateVolumeInput(vol) {
     volNum = parseInt(vol);
     /   var volNum;
     try  {
     volNum = parseInt(vol);
     }
     catch (e) {

     }
     if (volNum < 1) {
     throw new Error();
     }

     return volNum;
     }
     var submitTick = document.createElement('button');
     submitTick.addEventListener('click', function() {
     var input
     try {

     }
     catch {
     alert()
     }
     FinancialExchange.addEntry(

     )
     });
     var FinancialExchage =(function FinancialExchange() {
     var tickers = [];
     Table.prototype.addNewEntry = function (name, qty){
     var idx = tickers.findIndex(function(tick){
     tick.name = name;
     });
     if (idx === -1){
     tickers.push(new Ticker(name, qty));
     }
     else {
     tickers[idx].addVolume(qty);
     }
     this.sort();
     }

     function Table.prototype.sort(){
     tickers.sort(function(a, b){
     if (a.volume > b.volume) {
     return -1;
     }
     return 1;
     })
     }
     function Table.prototype.addToVolume(){

     }
     function loadTrades() {
     $.get(data).then(displayData)
     }

     })();
     function Table() {



     }

     function TickerModel(ticker, volume){
     this.ticker = ticker;
     this.volume = volume;
     }

     TickerModel.prototype.addVolume(num){
     this.volume += vol;
     }

     TickerModel.upd


     function displayData() {

     }