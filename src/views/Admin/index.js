(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('AdminCtrl', AdminCtrl);

  function AdminCtrl($scope, $timeout, $http, $window, $state, AgendaSvc) {

    $scope.init = function() {
      AgendaSvc.getAgendas().then(function(response){
        console.log('getAgendas success', response);
      }).catch(function(error){
        console.log('getAgenda error', error);
      })
    };
    $scope.init();
  }
})();
