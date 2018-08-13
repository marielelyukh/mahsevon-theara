;(function () {
  angular.module('directives.authHeader', [])
    .directive('authHeader', authHeader);

  authHeader.$inject = ['$document', '$timeout'];

  function authHeader($document, $timeout) {
    return {
      restrict: 'E',
      templateUrl: 'directives/auth-header/auth-header.html',
      scope: {
      },
      link: function (scope, element, attrs) {

      }
    };
  }
})();
