(function() {
  "use strict";
  angular
    .module('utils.codehangar')
    .factory('AgendaSvc', function($http, Session) {

      var _this = this

      this.createAgenda = function(agenda){
        console.log('agendaService', agenda)
        return $http
          .post('http://localhost:9999/api/v1/agenda', {
            headers: {
              'x-access-token': Session.userToken
            },
            'agenda': agenda}
            )
          .then(function(res) {
            console.log('createAgenda res', res)
            // Session.create(res.data.token, res.data.user);
            return res.data.agenda;
          });
      }

      this.getAgendas = function(){
        return $http
          .get('http://localhost:9999/api/v1/agenda', {
            headers: {
              'x-access-token': Session.userToken
            }
          })
          .then(function(res) {
            console.log('getAgendas res', res)
            // Session.create(res.data.token, res.data.user);
            return res.data.agendas;
          });
      }

      return this;

    });
})();
