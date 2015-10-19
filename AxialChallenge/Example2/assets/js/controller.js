(function (window) {
    'use strict';

    function Controller(model, view) {

        this.model = model;
        this.view = view;

        this.$pagesList = $$('#pages-list');

        window.addEventListener('load', function () {
            this.load();
        }.bind(this));

        $$('#pages-list, #pages-list span').addEventListener('click', function (e) {

            var id = e.target.attributes.getNamedItem('data-id'),
                count = 0;

            if (id) {
                id = id.value;
                count = e.target.attributes.getNamedItem('data-count').value;
            }
            else {
                id = e.target.parentNode.attributes.getNamedItem('data-id').value;
                count = e.target.parentNode.attributes.getNamedItem('data-count').value;
            }

            count >= 1 && window.toggleVisibility(id);

        }.bind(this));

    }

    Controller.prototype.load = function () {

        var t = this,
            func = function () {
                t.model.load(function (data) {
                    t.$pagesList.innerHTML = t.view.showAll(data);
                }.bind(t));
            };

        func();

        setInterval(func, 60000);
    };

    window.app.Controller = Controller;

})(window);