(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $timeout, $http, $window, $state, $location) {

    $scope.init = function() {
      console.log('Hello HomeCtrl')
      $scope.downloadCTA = 'Get the Beta';
    };

    $scope.download = function(downloadForm){
      downloadForm.$setDirty();

      console.log("downloadForm.$valid", downloadForm.$valid)
      if (downloadForm.$valid) {
        analytics.alias($scope.downloadEmail, {}, {}, function() {
          analytics.identify($scope.downloadEmail, {
            email: $scope.downloadEmail
          });

          analytics.track('clicked get Ahhhgenda', {
            "downloadCTA": $scope.downloadCTA,
            "downloadEmail": $scope.downloadEmail
          });

          $timeout(function() {
            $scope.showDownloadSuccess = true;
            console.log("$scope.showDownloadSuccess", $scope.showDownloadSuccess)
          });
        })
      }
      // console.log('event',event.target.innerHTML);

      // analytics.track('clicked get ReQL', {
      //   "button cta": event.target.innerHTML,
      //   "button link": null
      // });

      // alert('Stay tuned! ReQL Pro will be available for download soon!');
      // $location.path('/rethink');
    }


    $scope.init();
  }
})();
