(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($scope, $timeout, $http, $window, $state) {

    $scope.login = function(creds) {
      $scope.loginError = false;
      $scope.loginSuccess = false;
      $scope.loginValidationError = false;

      if ($scope.loginForm.$valid) {
        $http({
          method: 'POST',
          url: '/auth/',
          data: creds
        }).success(function(data) {
          // analytics.identify(data.user.email, {
          //   email: data.user.email
          // }, {}, function() {
          //   analytics.track('login', {
          //     email: data.user.email
          //   }, {}, function() {
              localStorage.setItem('session', JSON.stringify(data));
              $scope.loginSuccess = true;
              // $state.go('home');
            // });
          // });
        }).error(function(err) {
          $scope.loginError = true;
        });
      } else {
        $scope.loginValidationError = true;
      }
    };

    $scope.init = function() {};
    $scope.init();
  }
})();
