'use strict';

angular.module('ddoApp', 'ngRoute')
  .config(function($routeProvider){
    $routeProvider
      .when('', {
        templateUrl: 'boards.html',
        controller: 'BoardsCtrl'
      })
      .when('', {
        templateUrl: 'board.html',
        controller: 'BoardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
