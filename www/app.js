;(function () {
  'use strict';

  angular.module('app',
    ['factory.request',
      'factory.url',
      'app.core',
      'app.services',
      'app.factory',
      'app.directives',
      'app.filters'
    ])
    .run(runBlock);
  runBlock.$inject = ['$ionicPlatform', '$state','$timeout', '$ionicTabsDelegate'];

  function runBlock($ionicPlatform, $state, $timeout, $ionicTabsDelegate) {
    $state.go('start-page');
    $ionicPlatform.ready(function () {

    });


  }
})();
