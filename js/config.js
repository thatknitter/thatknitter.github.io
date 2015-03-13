;(function(){
  'use strict';
  
  angular.module('portApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/work', {
        templateUrl: 'views/work.html'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({redirectTo: '/'});
    });
  
}());
