(function() {
    'use strict';
    angular.module('sms', [
      'ngRoute',
      'sms.login',
      'sms.dashboard'
    ]).config(config)

    function config($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/login'})
    }
})();
