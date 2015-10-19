angular.module("Module3App", ['ngRoute'])
  .constant("VERSION", "1.0")
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: './home.html'
      }
    )
      .when('/info', {
        controller: 'InfoCtrl',
        templateUrl: './info.html'
      }
    )
  }])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = "welcome to home";
    $scope.description = function() {
      return "this is the description";
    }

  }])
  .controller('InfoCtrl', ['$scope', function($scope){
    $scope.title = "welcome to info";
  }])