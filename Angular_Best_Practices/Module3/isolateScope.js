app.value('scFollowedInstructors', []);

app.controller('scInstructorsCtrl', function($scope, scFollowedInstructors){
  $scope.followedInstCount = scFollowedInstructors.length;

  this.followInstructor = function(instructor){
    scFollowedInstructors.push(instructor);
    $scope.followedInstCount = scFollowedInstructors.length;
  }
});

app.directive('scInstructors', function() {
  return {
    restrict: 'E',
    replace: true,
    controller: 'scInstructorCtrl',
    template: '<div>instructors {{followedInstCount}} followed</div>' +
      '<div class="row" ng-repeat="instructor in instructorList">' +
      '<div class="col-md-6">{{instructor.name}}</div>' +
      '<div class="col-md-6"><sc-follow-instructor instructor="instructor"></sc-follow-instructor></div>' +
      '</div>' +
      '</div>'
  }
});

app.directive('scFollowInstructor', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="instructor-follow-button">' +
      '<button class="btn" ng-click="followInstructor()">Follow</button>' +
      '</div>',
    scope : {
      instructor: '='
    },
    require: '^scInstructors', // name of directive, not of controller
    link: function(scope, element, attrs, ctrl){
      scope.followInstructor = function(){
        ctrl.followInstructor(scope.instructor);
        element.css('display', 'none');
      };
    }
  }
})