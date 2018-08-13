;(function () {
    'use strict';

    angular.module('service.utilsSvc', []).factory('utilsSvc', utilsSvc);

    utilsSvc.$inject = ['$ionicPlatform', '$q','$cordovaDatePicker'];

    function utilsSvc($ionicPlatform, $q, $cordovaDatePicker) {
        var model = {
        };
    }
})();
