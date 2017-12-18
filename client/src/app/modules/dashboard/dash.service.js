(function() {
    'use strict';

    angular
        .module('sms.dashboard')
        .service('dashService', dashService);

    dashService.$inject = ['$http'];

    /* @ngInject */
    function dashService($http) {
        var service = {}
        return service
    }
})();
