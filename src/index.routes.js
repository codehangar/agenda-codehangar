(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push([
        '$injector',
        function($injector) {
          return $injector.get('AuthInterceptor');
        }
      ]);
    })
    .factory('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS) {
      return {
        responseError: function(response) {
          $rootScope.$broadcast({
            401: AUTH_EVENTS.notAuthenticated,
            403: AUTH_EVENTS.notAuthorized,
            419: AUTH_EVENTS.sessionTimeout,
            440: AUTH_EVENTS.sessionTimeout
          }[response.status], response);
          return $q.reject(response);
        }
      };
    })
    .config(routeConfig)
    .run(function($rootScope, AUTH_EVENTS, AuthSvc, $location, Session) {
      Session.init();
      $rootScope.$on('$stateChangeStart', function(event, next) {
        var requiresAuth = next.requiresAuth;
        console.log('requiresAuth, !AuthSvc.isAuthorized(requiresAuth)', requiresAuth, !AuthSvc.isAuthorized(requiresAuth))
        if (requiresAuth) {
          
          if (!AuthSvc.isAuthenticated()) {
            event.preventDefault();
            // user is not allowed
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            console.log('AUTH_EVENTS.notAuthenticated', AUTH_EVENTS.notAuthenticated)
              // $location.path("/login");
          } 
          // else {
            // user is not logged in
            // $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            // console.log('AUTH_EVENTS.notAuthenticated', AUTH_EVENTS.notAuthenticated)
            // $rootScope.$apply(function() {
              // $location.path("/login");
        //       $rootScope.$evalAsync(function() {
        //   $location.path('/login');
        // });
              // console.log('go to login');
            // });
          // }
        }
      });
    });

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
        },
        requiresAuth: false
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
      .state('admin', {
        url: '/admin',
        views: {
          'content': {
            templateUrl: 'views/Admin/index.html',
            controller: 'AdminCtrl',
            controllerAs: 'AdminCtrl'
          }
        },
        requiresAuth: true
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
