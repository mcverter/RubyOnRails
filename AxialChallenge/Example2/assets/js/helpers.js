(function (window) {
    'use strict';

    window.$ = document.querySelectorAll.bind(document);
    window.$$ = document.querySelector.bind(document);

    Object.prototype.each = function (callback) {
        for (var x in this) {
            if (this.hasOwnProperty(x)) {
                callback.call(this, this[x]);
            }
        }
    };

    window.get = function (path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    if (callback) callback(data);
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
    }

    window.toggleVisibility = function (id) {

        var e = document.getElementById(id);
        if(e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }

})(window);