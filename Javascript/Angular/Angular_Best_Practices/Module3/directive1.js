app.directive('myDirective', function (){
  return {
    restrict: 'E',
    replace: true,
    template: '<div>this is my directive</div>'
  }
});
angular.module('app').controller('Controller1', function($scope){
  $scope.val = "directives!"
})