;(function () {
    'use strict';

    angular
        .module('app')
        .controller('StartPageCtrl', StartPageCtrl);

    StartPageCtrl.$inject = ['$cordovaDatePicker','$ionicGesture'];

    function StartPageCtrl($cordovaDatePicker, $ionicGesture) {
        let vm = this;
    }
})();
