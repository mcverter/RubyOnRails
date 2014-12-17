angular.module('app').controller('mvCourseListCtrl', function($scope){
$scope.courses = mvCourse.query();
});