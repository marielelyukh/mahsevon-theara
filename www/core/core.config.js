;(function () {
  angular
    .module('app')
    .config(mainConfig);

  mainConfig.$inject = ['$stateProvider', '$urlRouterProvider',
    '$ionicConfigProvider', 'toastrConfig', '$mdGestureProvider'];

  // $mdGestureProvider'
  function mainConfig($stateProvider, $urlRouterProvider,
                      $ionicConfigProvider, toastrConfig, $mdGestureProvider) {

    angular.extend(toastrConfig, {
      // preventDuplicates: true,
      preventOpenDuplicates: true
    });


    $stateProvider
      .state('start-page', {
        url: '/start-page',
        templateUrl: 'templates/start-page/start-page.html',
        controller: 'StartPageCtrl',
        controllerAs: 'vm',
        cache: false
      })
      .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/auth/login/login.html'
      })
      .state('sign-up', {
        url: '/sign-up',
        controller: 'SignUpCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/auth/sign-up/sign-up.html'
      })
      .state('add-phone', {
        url: '/add-phone',
        controller: 'AddPhoneCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/auth/add-phone/add-phone.html'
      })
      .state('add-code', {
        url: '/add-code',
        controller: 'AddCodeCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/auth/add-code/add-code.html'
      })
      .state('change-password', {
        url: '/change-password',
        controller: 'ChangePasswordCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/auth/change-password/change-password.html'
      })
      .state('app', {
        url: '/',
        controller: 'AppCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/side-menu/side-menu.html',
        // template: '<ion-nav-view></ion-nav-view>'
      })
      .state('app.home', {
        url: '/home',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/home/home.html'
      })

      .state('app.comments', {
        url: '/comments',
        controller: 'CommentsCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/home/home.html'
      })
      .state('app.terms', {
        url: '/terms',
        controller: 'TermsCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/home/home.html'
      })
      .state('app.contact-us', {
        url: '/contact-us',
        controller: 'ContactUsCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/home/home.html'
      })
      .state('app.notification', {
        url: '/notification',
        controller: 'NotificationCtrl',
        controllerAs: 'vm',
        templateUrl: 'templates/home/home.html'
      })


  }
})();
