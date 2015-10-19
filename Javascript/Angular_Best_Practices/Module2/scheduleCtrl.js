angular.module('app').controller('ScheduleCtrl', [
  '$scope', 'schedule', function($scope, schedule){
    $scope.schedule = schedule;
    $scope.register = function(newCourse){
      $scope.schedule.register(newCourse);
    }


  }]);
