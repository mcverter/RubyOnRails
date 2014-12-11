angular.module('app1', ['app2', 'app3']);
angular.module('app2', []);
angular.module('app3', []);


angular.module('app2').controller('Controller1', function($scope){
  $scope.name = 'Controller 1 in app 2';
});

angular.module('app3').controller('Controller1', function($scope){
  $scope.name = 'Controller 1 in app 3';
});