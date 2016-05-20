(function() {
  "use strict";
  angular
    .module('utils.codehangar')
    .factory('AuthSvc', function($http, Session) {

      var _this = this

      this.login = function(creds) {
        return $http
          .post('http://localhost:9999/api/v1/auth/login', creds)
          .then(function(res) {
            console.log('login res', res)
            Session.create(res.data.token, res.data.user);
            return res.data.user;
          });
      }

      this.getMe = function() {
        return $http
          .get('http://localhost:9999/api/v1/auth/me', {
            headers: {
              'x-access-token': Session.userToken
            }
          })
      }

      this.isAuthenticated = function() {
        console.log('!!Session.userToken',!!Session.userToken);
        return !!Session.userToken;
      };

      this.isAuthorized = function() {
        // if (!angular.isArray(authorizedRoles)) {
        //   authorizedRoles = [authorizedRoles];
        // }
        return ( _this.isAuthenticated() );
      };

      this.hello = function() {
        console.log('hello AuthSvc')
      }

      return this;

    })
    .service('Session', function() {
      this.create = function(token, user) {
        localStorage.setItem('session', JSON.stringify(token));
        this.userToken = token;
        this.user = user;
      };
      this.destroy = function() {
        this.userToken = null;
        this.user = null;
        localStorage.removeItem('session');
      };
      this.init = function(state) {
        // var deferred = $q.defer();
        var session = JSON.parse(localStorage.getItem('session'));
        // return session;
        this.userToken = session;
        // if (session) {
        //   if (state) {
        //     $timeout(function() {
        //       $state.go(state);
        //     });
        //   } else {
        //     deferred.resolve(session);
        //   }
        // } else {
        //   $timeout(function() {
        //     $state.go('login');
        //   });
        // }
        // return deferred.promise;
      // }
      };
    });
})();
