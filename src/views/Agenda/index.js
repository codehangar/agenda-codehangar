(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('AgendaCtrl', AgendaCtrl);

  function AgendaCtrl($scope, $timeout, $http, $window, $state, $location, $sce) {

    $scope.init = function() {
      console.log('Hello AgendaCtrl')
      $scope.isCollapsed = true;
      getAgenda();
    };

    function getAgenda() {
      console.log('get agenda');
      $http.get('gwc-2016.json').success(function(response) {
          $scope.agenda = response[0].agenda;
          console.log('$scope.agenda', $scope.agenda);
      });
      
    }

    $scope.init();
  }
})();
