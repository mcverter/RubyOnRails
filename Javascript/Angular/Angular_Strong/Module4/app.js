angular.module('Mod', [])
  .controller('RepeatCtrl', ['$scope', function($scope){
    $scope.setColors = function() {
      $scope.values=['red', 'green', 'blue']
    };
    $scope.setStates = function() {
      $scope.values = ['MA', 'NY', 'CT']
    };
    $scope.getValues = function() {
      return $scope.values;
    }
  }])
  .controller('FormCtrl', ['$scope', function($scope){
    $scope.generateAges = function() {
      var ages = [];
      for (var i=18; i<60; i++){
        ages.push(i)
      }
      return ages;
    }

    $scope.submit = function() {
      if ($scope.myform.$valid) {
        alert("submitted");
      }
      else {
        alert("invalid form");
      }
    }

  }]);