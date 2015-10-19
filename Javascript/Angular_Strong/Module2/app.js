angular.module("Module2App", [])
  .constant("VERSION", "1.0")
  .run(['VERSION', function(VERSION) {
    alert(VERSION);
  }]);