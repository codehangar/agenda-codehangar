(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('ApplicationCtrl', ApplicationCtrl);

  function ApplicationCtrl($scope, $timeout, $http, $window, $state, AuthSvc) {

    $scope.init = function() {
      console.log('hellp ApplicationCtrl')
    };

    $scope.init();
  }
})();
