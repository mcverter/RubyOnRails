/**
 * Created by mitchell on 2/20/2015.
 */

angular.module('app', []);
angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker',
    address: {
      street: 'Po Box 123',
      city: 'Secret Rebet Base',
      planet: 'Yavin 4'
    },
    friends : [
      'Han',
      'Leia',
      'Chewie'
    ]
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E"
  }
})