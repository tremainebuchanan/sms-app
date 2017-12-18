(function() {
    'use strict';

    angular
        .module('sms.login')
        .service('loginService', loginService);

    loginService.$inject = ['$http'];

    /* @ngInject */
    function loginService($http) {
        var service = {}
        return service
    }
})();
