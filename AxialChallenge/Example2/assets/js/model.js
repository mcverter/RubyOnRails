(function (window) {
    'use strict';

    function Model() {
        this.pages = [];
    }

    Model.prototype.findOne = function (path, callback) {

        var i, l,
            page;

        for (i = 0, l = this.pages.length; i < l; i++) {
            if (this.pages[i].path === path) {
                page = this.pages[i];
            }
        }

        callback && callback(page);
    };

    Model.prototype.load = function (callback) {
        console.log('loading...');
      window.get('http://api.chartbeat.com/live/toppages/v3/?apikey=317a25eccba186e0f6b558f45214c0e7&host=avc.com&limit=10', function(data) {
          this.pages = data.pages;
          callback && callback(data.pages);
      }.bind(this));
    };

    Model.prototype.setRefreshInterval = function (refreshInterval) {
        setInterval(this.load, refreshInterval);
    };

    window.app.Model = Model;

})(window);