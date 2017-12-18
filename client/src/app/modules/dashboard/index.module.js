(function() {
    'use strict';

    angular
        .module('sms.dashboard', []).config(config)
        function config($routeProvider) {
          $routeProvider.when('/dashboard', {
            controller: 'DashCtrl as vm',
            templateUrl: 'app/modules/dashboard/tpl/dash.html'
          })
        }
})();
