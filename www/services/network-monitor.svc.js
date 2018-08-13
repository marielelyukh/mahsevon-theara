;(function () {
    'use strict';

    angular.module('service.networkMonitorSvc', []).factory('networkMonitorSvc', networkMonitorSvc);

    networkMonitorSvc.$inject = ['$rootScope', '$cordovaNetwork'];

    function networkMonitorSvc($rootScope, $cordovaNetwork) {

        return {
            isOnline: function () {
                if (ionic.Platform.isWebView()) {
                    return $cordovaNetwork.isOnline();
                } else {
                    return navigator.onLine;
                }
            },
            isOffline: function () {
                if (ionic.Platform.isWebView()) {
                    return !$cordovaNetwork.isOnline();
                } else {
                    return !navigator.onLine;
                }

            }
        }
    }
})();