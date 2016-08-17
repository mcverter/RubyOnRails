System.register(['./spinner.component', './spinner.service'], function(exports_1) {
    "use strict";
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (spinner_component_1_1) {
                exportStar_1(spinner_component_1_1);
            },
            function (spinner_service_1_1) {
                exportStar_1(spinner_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=spinner.js.map