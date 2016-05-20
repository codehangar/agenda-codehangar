(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('ApplicationCtrl', ApplicationCtrl);

  function ApplicationCtrl($scope, $rootScope, $timeout, $http, $window, $state, AuthSvc, Session) {

    $scope.init = function(){
      if(Session.userToken){
        console.log('init AuthSvc.getMe();',AuthSvc.getMe() );
        AuthSvc.getMe().then(function(response){
          var user = response.data;
          $scope.setCurrentUser(user);
        }).catch(function(error){
          console.log('promised error', error)
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

    $rootScope.$on("auth-login-success", function(){
        //do something
        console.log('go to admin')
        $state.go("admin");
    });
    $rootScope.$on("auth-not-authenticated", function(){
        //do something
        // $scope.$apply(function() {
          $state.go("login");
          // $scope.$apply()
          console.log('go to login');
        // });
        
    });

    $scope.init();
  }
})();
