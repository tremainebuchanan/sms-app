(function() {
    'use strict';

    angular
        .module('sms.dashboard')
        .controller('DashCtrl', DashCtrl)

    DashCtrl.$inject = ['dashService']

    /* @ngInject */
    function DashCtrl(dashService) {
        var vm = this

        activate();

        function activate() {
          console.log('Dash')
        }
    }
})();
