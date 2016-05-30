(function() {
  "use strict";
  angular
    .module('utils.codehangar')
    .factory('AgendaSvc', function($http, Session) {

      var _this = this

      this.createAgenda = function(agenda){
        console.log('agendaService', agenda)
        return $http
          .post('http://localhost:9999/api/v1/agenda', agenda)
          .then(function(res) {
            console.log('createAgenda res', res)
            // Session.create(res.data.token, res.data.user);
            return res.data.agenda;
          });
      }

      return this;

    });
})();
