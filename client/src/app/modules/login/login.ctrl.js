(function() {
    'use strict'
    angular
        .module('sms.login')
        .controller('LoginCtrl', LoginCtrl)

    //LoginCtrl.$inject = []

    /* @ngInject */
    function LoginCtrl() {
        var vm = this;

        activate();

        function activate() {
          console.log('Login')
      }
    }
})();
