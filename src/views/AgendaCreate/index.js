(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('AgendaCreateCtrl', AgendaCreateCtrl);

  function AgendaCreateCtrl($scope, $timeout, $http, $window, $state, AgendaSvc) {

    $scope.submit = function(){
      console.log($scope.details);
      AgendaSvc.createAgenda($scope.details).then(function(response){
        console.log('createAgenda success', response);
      }).catch(function(error){
        console.log('createAgenda error', error);
      })
    }

    $scope.init = function() {
      // AuthSvc.hello();
    };
    $scope.init();
  }
})();
