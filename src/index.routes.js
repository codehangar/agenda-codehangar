(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'views/Home/index.html',
            controller: 'HomeCtrl',
            controllerAs: 'HomeCtrl'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'content': {
            templateUrl: 'views/Login/index.html',
            controller: 'LoginCtrl',
            controllerAs: 'LoginCtrl'
          }
        }
      })
      .state('admin', {
        url: '/admin',
        views: {
          'content': {
            templateUrl: 'views/Admin/index.html',
            controller: 'AdminCtrl',
            controllerAs: 'AdminCtrl'
          }
        }
      })
      .state('register', {
        url: '/register',
        views: {
          'content': {
            templateUrl: 'views/Register/index.html',
            controller: 'RegisterCtrl',
            controllerAs: 'RegisterCtrl'
          }
        }
      })
      .state('gwc-2016', {
        url: '/gwc-2016',
        views: {
          'content': {
            templateUrl: 'views/Agenda/index.html',
            controller: 'AgendaCtrl',
            controllerAs: 'AgendaCtrl'
          }
        }
      });

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.url();
      // check to see if the path already has a slash where it should be
      if ('/' === path[path.length - 1] || path.indexOf('/?') > -1) {
        return;
      }
      if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
      }
      return path + '/';
    });

    $locationProvider.html5Mode(true);

  }

})();
