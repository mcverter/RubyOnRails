angular.module('app', ['ngResource', 'ngRoute']);
angular.module('app').config(function ($routeProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin');
    }},
        user: {auth: function(mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute('admin');
        }}

    };

        $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'}).
    when('/admin/users', {templateUrl: '/partials/main', controller: 'mvUserListCtrl'},
    resolve: routeRoleChecks.admin

        }.
    when('/profile', controller:'mvProfileCtrl', resolve: routeRoleChecks.user)
    }).
when('/courses', controller:'mvCoursesCtrl')
;

});

angular.module('app').controller('mainCtrl', function($scope){
   $scope.myVar = "Hello meanies";
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on($routChangeError, function(evt, current, previous, rejection){
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});
