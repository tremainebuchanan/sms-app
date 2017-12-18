(function() {
    'use strict';
    angular.module('sms.login', []).config(config)
    function config($routeProvider) {
      $routeProvider.when('/login', {
        controller: 'LoginCtrl as vm',
        templateUrl: 'app/modules/login/tpl/login-form.html'
      })
    }
})();
