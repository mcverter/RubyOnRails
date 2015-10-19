(function(){
  var tickerId = 'tickIn',
    volumeId = 'volIn';

  var tickerLabel = document.createElement('label');
  tickerLabel.innerText = "Ticker"

  var tickerInput = document.createElement('input');
  tickerInput.id = "tickIn";
  var volumeLabel = document.createElement('label');
  volumeLabel.innerText = "Volume";
  var volumeInput = document.createButton('input');
  volumeInput.id = "volIn";

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
/*    var volNum;
    try  {
      volNum = parseInt(vol);
    }
    catch (e) {

    }
    if (volNum < 1) {
      throw new Error();
    }
    */
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
})()