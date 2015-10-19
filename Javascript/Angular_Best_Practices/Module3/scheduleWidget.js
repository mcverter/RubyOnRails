app.controller('scSchedule3Ctrl', function($scope) {
  $scope.viewCourseDetails = function (courseToView) {
    console.log("viewing details ".courseToView.name);
  };
});

app.directive('scSchedule3', function() {
  return {
    restrict: "E",
    replace: true,
    template: "<div>schedule</div>" +
      "<h2>this is your schedule</h2>" +
      "<div>here are the details </div>" +
      "<div class='row' ng-repeat='course in courseList'>" +
      '<div class="col-md-6">{{course.name}}</div>' +
      '<div class="col-md-6"><a href="#" ng-click="ViewCourseDetails(course)">Details</a> </div>' +
      "</div>",
    controller: 'scSchedule3Ctrl'
  }
});



app.directive('scSchedule', function() {
  return {
    restrict: "E",
    replace: true,
    template: "<div>schedule</div>" +
      "<h2>this is your schedule</h2>" +
      "<div>here are the details </div>" +
      "<div class='row' ng-repeat='course in courseList'>" +
      '<div class="col-md-6">{{course.name}}</div>' +
      '<div class="col-md-6"><a href="#" ng-click="ViewCourseDetails(course)">Details</a> </div>' +
      "</div>",
    controller: function($scope){
      $scope.viewCourseDetails = function(courseToView){
        console.log("viewing details ". courseToView.name);
      }
    }
  }
});

app.directive('scSchedule2', function() {
  return {
    restrict: "E",
    replace: true,
    template: "<div>schedule</div>" +
      "<h2>this is your schedule</h2>" +
      "<div>here are the details </div>" +
      "<div class='row' ng-repeat='course in courseList'>" +
      '<div class="col-md-6">{{course.name}}</div>' +
      '<div class="col-md-6"><a href="#" ng-click="ViewCourseDetails(course)">Details</a> </div>' +
      "</div>",
    link: function ($scope, element, attr) {
      $scope.viewCourseDetails = function (courseToView) {
        console.log("viewing details ".courseToView.name);
      }
    }
  };
});
angular.module('app').controller('sch eduleCtrl', function($scope){
  $scope.courseList = [
    {id: 2, name: "boo"},
    {id: 3, name: "foo"},
    {id: 4, name: "xoo"}
  ]
})