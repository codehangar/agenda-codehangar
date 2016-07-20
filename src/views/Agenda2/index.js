(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('Agenda2Ctrl', Agenda2Ctrl);

  function Agenda2Ctrl($scope, $timeout, $http, $window, $state, $location, $sce) {

    $scope.init = function() {
      console.log('Hello AgendaCtrl')
      $scope.isCollapsed = true;
      $scope.sessionFilters = [];
      getAgenda();
    };

    function getAgenda() {
      console.log('get agenda');
      $http.get('tech-sassy.json').success(function(response) {
        $scope.agenda = response;
        console.log('$scope.agenda', $scope.agenda);
      });
    }

    function isSessionInFilterArray(session) {
      for (var i = 0; i < $scope.sessionFilters.length; i++) {
        if ($scope.sessionFilters[i] === session) {
          return true;
        }
      }
    }

    $scope.clickedSession = function(session) {
      //if session not in filter array, add session to filter array, else remove it
      if (isSessionInFilterArray(session)) {
        var index = $scope.sessionFilters.indexOf(session);
        if (index > -1) {
          $scope.sessionFilters.splice(index, 1);
        }
      } else {
        $scope.sessionFilters.push(session);
      }
    }

    $scope.init();
  }
})();
