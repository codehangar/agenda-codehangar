(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('RegisterCtrl', RegisterCtrl);

  function RegisterCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.signUp = function(creds) {
      $scope.loginError = false;
      $scope.loginSuccess = false;
      $scope.loginValidationError = false;

      if ($scope.registerForm.$invalid) {
        $scope.loginValidationError = true;
        return;
      }

      $http({
        method: 'POST',
        url: 'http://localhost:9999/api/v1/user',
        data: creds
      }).success(function(data) {
        console.log('success', data);
        $scope.session = data;
        $scope.user = data.user;
        console.log('$scope.session', $scope.session);

        localStorage.setItem('session', JSON.stringify($scope.session));
        $scope.loginSuccess = true;

        // Segment Identify
        // analytics.alias($scope.user.email, {}, {}, function() {
        //   analytics.identify($scope.user.email, {
        //     email: $scope.user.email
        //   }, {}, function() {
        //     // Segment signup Event
        //     analytics.track('signup', {
        //       email: $scope.user.email,
        //       'customer id': $scope.user._id
        //     }, {}, function() {
        //       // Redirect to google auth
        //       $timeout(function() {
        //         $window.location.href = '/auth/google?token=' + $scope.session.token;
        //       }, 3000);
        //     });
        //   });
        // });

      }).error(function(err) {
        $scope.loginError = true;
      });

    };

    $scope.init = function() {};
    $scope.init();
  }
})();
