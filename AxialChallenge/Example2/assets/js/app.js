(function () {
    'use strict';

    function Pages() {
        this.model = new app.Model();
        this.view = new app.View();
        this.controller = new app.Controller(this.model, this.view);
    }

    var pages = new Pages();

})();