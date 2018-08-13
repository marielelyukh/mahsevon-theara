;(function () {
    'use strict';

    angular.module('service.userSvc', []).factory('userSvc', userSvc);

    userSvc.$inject = ['$localStorage', 'http', 'url'];

    function userSvc($localStorage, http, url) {
        var model = {

        };


    }
})();
