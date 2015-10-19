angular.module('MyDirectives', [])
.constant('SOCIAL', {
    'facebook': "Facebook",
    'twitter': "Twitter"
  })
.factory('faSocialClassName', function(){
    return function(name){
      return 'fa fa-' + name;
    }
  })
.controller('SocialCtrl', ['$scope', 'SOCIAL', function($scope, SOCIAL){
    $scope.services = SOCIAL;
  }])
.directive('socialItem', ['SOCIAL', 'faSocialClassName', function(SOCIAL, faSocialClassName){
    return function(scope, element, attrs){
      element.html('<span class="' + faSocialClassName(attrs.socialItem)+ '></span>')
    }
  }]);