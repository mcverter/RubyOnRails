app.directive('mySiblingRequiringDirective', function (){
  return {
    restrict: 'E',
    replace: true,
    template: '<div>this is my directive</div>',
    require: 'nameSiblingDirectiveController'
  }
});
app.directive('myRequiringParentDirective', function (){
  return {
    restrict: 'E',
    replace: true,
    template: '<div>this is my directive</div>',
    require: '^nameParentController'
  }
});

angular.module('app').controller('Controller1', function($scope){
  $scope.val = "directives!"
});