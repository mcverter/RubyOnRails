var app=angular.module("phoneApp",[]);

app.controller("AppCtrl", function ($scope){
    $scope.callHome = function( message) {
        alert('calling home ' + message);
    }
})

app.directive('phone', function () {
    return {
        scope : {
            dial: '&'
        },
        template: '<input type="text" ng-model="value"/>'+
            '<div class="button" ng-click="dial({message:value})">Call home</div>'
    }

})