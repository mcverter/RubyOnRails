angular.module('MyApp',[])
  .factory('usersService', ['$rootScope',function($rootScope){
    var user;
    return {
      setCurrentUser: function(current){
        user = current;
        $rootScope.broadcast('userChanged');
      },
      getCurrentUser: function() {
        return user;
      }
    }
  }])
.controller('DetailCtrl', ['$scope', 'usersService', function($scope, usersService){

    $scope.$on('userChanged', function(event){
      $scope.currentUser = usersService.getCurrentUser();
    })
  }])
  .controller('InfoCtrl', ['$scope', 'usersService', function($scope, usersService){
    usersService.getCurrentUser();
  }])
.controller('ListCtrl', ['$scope','$rootScope', '$http', 'usersService', function($scope, $rootScope, $http, usersService){
    $http.get('./users.json')
      .success(function(users){
        $scope.users=users;
      })
    $scope.selectUser = function(user) {
      usersService.setCurrentUser(user);
      $rootScope.$broadcast('userChanged');
    }
  }])