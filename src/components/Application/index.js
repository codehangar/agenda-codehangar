(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('ApplicationCtrl', ApplicationCtrl);

  function ApplicationCtrl($scope, $rootScope, $timeout, $http, $window, $state, AuthSvc, Session, AUTH_EVENTS) {

    $scope.init = function() {
      if (Session.userToken) {
        // console.log('init AuthSvc.getMe();',AuthSvc.getMe() );
        AuthSvc.getMe().then(function(response) {
            var user = response.data;
            $scope.setCurrentUser(user);
          }).catch(function(error) {
            console.log('promised error', error)
            if (error.data.code === 400 && error.data.message === "Token has expired") {
              $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
          })
          // $scope.setCurrentUser(AuthSvc.getMe().data)
      }

    }

    $scope.currentUser = null;
    // $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthSvc.isAuthorized;

    console.log('$scope.isAuthorized', $scope.isAuthorized())

    $scope.setCurrentUser = function(user) {
      console.log('set user', user);
      $scope.currentUser = user;
    };

    $rootScope.$on("auth-login-success", function() {
      console.log('go to admin')
      $state.go("admin");
    });
    $rootScope.$on("auth-not-authenticated", function() {
      $state.go("login");
      console.log('go to login');
    });

    $scope.init();
  }
})();
