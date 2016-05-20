(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('AdminCtrl', AdminCtrl);

  function AdminCtrl($scope, $timeout, $http, $window, $state, AuthSvc) {

    $scope.init = function() {
      AuthSvc.hello();
    };
    $scope.init();
  }
})();
