angular.module('app', []);
angular.module('app').service('mySvc', function() {
  return {
    val: "I'm a service"
  }
});
angular.module('app').controller('Controller1', ['$scope', 'mySvc', function($scope, mySvc) {
  $scope.val = mySvc.val;
}])
