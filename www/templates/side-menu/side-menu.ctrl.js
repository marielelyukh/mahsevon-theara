(function () {
  'use strict';

  angular
    .module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$state', '$sessionStorage', '$rootScope', '$localStorage'];

  function AppCtrl($state, $sessionStorage, $rootScope, $localStorage) {

    var vm = this;

  }
})();
