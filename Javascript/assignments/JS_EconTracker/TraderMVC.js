/**
 * @module
 * Top Level Module*
 */

(function() {
  'use strict';

  /**
   * @class MyEvent
   * @classdesc: Provides a mechanism for triggering callbacks in
   *           response to event
   *
   * @property listeners:  Callbacks executed in response to event
   */
  function MyEvent() {
    this.listeners = [];
  }

  /**
   * @method attach : Adds a callback
   * @param listener:  Callback registered to event
   */
  MyEvent.prototype.attach = function (listener) {
    this.listeners.push(listener);
  };
  /**
   * method notify: Executes all of the registered callbacks
   * @param args: Arguments passed to each callback
   */
  MyEvent.prototype.notify = function (args) {
    this.listeners.forEach(function(listener){
      listener(args);
    });
  };

  /**
   * @module FinExModel : Provides model for Financial Exchange
   * @property tickers:  Array of Stock Tickers
   *
   * @exports onUpdate: Event triggered when when tickers array is updated
   * @exports update : Executes update of tickers array
   */
  var FinExModel = (function FinExModel () {
    var tickers = [],
      onUpdate = new MyEvent();


    /**
     * @function addTicker: either adds new or updates existing tickers.
     *                      Then triggers onUpdate event
     * @param ticks:  Array of tickers
     *
     */
    function addTickers(ticks) {
      ticks.forEach(function(ticker) {
        var idx = _.findIndex(tickers, function (tick) {
          return tick.name === ticker.name;
        });
        if (idx === -1) {
          tickers.push(new Ticker(ticker.name, ticker.volume));

          // will fix
          // $.ajax({type: "POST",url: "",data: {},success: function(data) {}});
        }
        else {
          tickers[idx].addVolume(ticker.volume);

          // will fix
          // $.ajax({type: "PUT",url: "",data: {},success: function(data) {}});
        }});

      onUpdate.notify(tickers)
    }

    /**
     * @class Ticker
     * @param name
     * @param volume
     */
    function Ticker(name, volume) {
      this.name = name;
      this.volume = volume;
    }

    /**
     * @method addVolume
     * @param qty
     */
    Ticker.prototype.addVolume = function (qty) {
      this.volume += qty;
    };

    return {
      onUpdate: onUpdate,
      update: addTickers
    };
  })();

  /**
   * @module FinExView:  View for Financial Exchange
   *
   * @property nameInput : Input for new Ticker Name
   * @property volumeInput : Input for new Ticker value
   * @property submitButton : Button for Submitting new Ticker
   * @property onSubmit : Event emitted on new Ticker submission
   *
   * @property allTickers: List of all Stock Tickers
   * @property totalVolume:  Total trading volume
   *
   * @exports onSubmit:   Event emitted on new Ticker submission
   * @exports updateTable: Callback updates allTickers when model changes
   * @exports updateTotal: Callback updates totalVolume when model changes
   */
  var FinExView = (function () {
    var
      nameInput = document.getElementById('tickerName'),
      volumeInput = document.getElementById('tickerVolume'),
      submitButton = document.getElementById('submitTrade'),

      allTickers = document.getElementById('tickerView'),
      totalVolume = document.getElementById('totalTrades'),

      onSubmit = new MyEvent();


    submitButton.addEventListener('click', function(){
      onSubmit.notify({name: nameInput.value,
        volume: volumeInput.value});
      nameInput.value = '';
      volumeInput.value = '';
    });

    /**
     * @function clearTickerView:
     *      Empties out allTickers table nodes
     */
    function clearTickerView() {
      var children = allTickers.childNodes,
        numChildren = children.length - 1;
      for (var i = numChildren; i >= 0; i--) {
        allTickers.removeChild(children[i]);
      }
    }

    /**
     * @method updateTickerView:
     *      Adds the Stock Tickers to the table
     *
     * @param values:  Tickers to display
     */
    function updateTickerView(values) {
      clearTickerView();
      values.forEach(function(val){
        var
          tr = document.createElement('tr'),
          name =document.createElement('td'),
          volume = document.createElement('td');
        name.innerHTML = val.name;
        volume.innerHTML = val.volume;
        allTickers.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(volume);
      });
    }

    /**
     * @method updateTotal: Updates total volume of trading
     * @param total
     */
    function updateTotal(total) {
      totalVolume.innerHTML = total;
    }

    return {
      onSubmit: onSubmit,
      updateTable: updateTickerView,
      updateTotal: updateTotal
    }
  })();
  /**
   * @module FinExController: Provides the controller to connect the Model and the view
   * @property view:  reference to view
   * @property model:  reference to model
   */
  var FinExController = (function () {

    var view = FinExView,
      model = FinExModel;

    view.onSubmit.attach(updateModel);
    model.onUpdate.attach(updateView);

    /**
     * @function loadTickersFrom Server
     *      Placeholder for an actual AJAX call, to prepopulate the page
     *
     * @param tickers
     */
    function loadTickersFromServer(tickers) {
      model.update(tickers);
    }

    /**
     * @function validateVolume: Makes sure value from view is integer > 0
     * @param: input
     * @returns boolean
     */
    function validateVolume(input) {
      var num;
      if (!input) {
        alert("You must enter an integer for the volume");
        return false;
      }
      try {
        num = parseInt(input)
      }
      catch (e) {
        alert('You may only enter integer values for the volume');
        return false;
      }
      if (isNaN(num) || (num < 1)) {
        alert('You must submit an integer greater than zero for the volume');
        return false;
      }
      return true;
    }
    /**
     * @function validateName: Makes sure value from view contains only letters
     * @param: input
     * @returns boolean
     */
    function validateName(input) {
      if (input.search(/[^a-zA-Z]/)!= -1) {
        alert('You can only use alphabetical characters for the ticker name');
        return false;
      }
      return true;
    }

    /**
     * @function updateView
     *    In response to update of Model, View updates display of tickers
     *    and total trade volume.
     *
     * @param tickers
     */
    function updateView(tickers) {
      var total;

      tickers.sort(function(a, b){
        if (a.volume < b.volume) {
          return 1
        }
        return -1
      });

      total = tickers.reduce(function(sum, next){
        return sum + next.volume;
      }, 0);

      view.updateTable(tickers);
      view.updateTotal(total)
    }

    /**
     * @function updateModel:
     *   In response to submit of View, the Model is told to update the tickers stored
     *
     * @param addedTicker
     */
    function updateModel(addedTicker) {
      if ((validateName(addedTicker.name)) &&
        validateVolume(addedTicker.volume))
        model.update([{name: addedTicker.name.toUpperCase(),
          volume: parseInt(addedTicker.volume)}]);
    }

    return {
      load: loadTickersFromServer
    }
  })();

  FinExController.load([{name:'APPL', volume:6},
      {name:'MSFT', volume:8},
      {name:'GE', volume:10},
      {name:'DIS', volume:2},
      {name:'PEP', volume:1},
      {name:'T', volume:5}]
  )
})();

