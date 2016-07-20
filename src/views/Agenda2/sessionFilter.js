console.log('session')
angular
  .module('utils.codehangar')
  .filter('bySession', function() {
    return function(sessions, filters) {
      // console.log('filtering ', sessions)
      // console.log('filtering by', filters)
      var out = [];
      if (filters.length === 0) {
        out = sessions
      } else {
        angular.forEach(sessions, function(session) {
          angular.forEach(filters, function(filter) {
            if (session.sessionType.name === filter.name) {
              out.push(session);
            }
          })

        })
      }

      // Filter logic here, adding matches to the out var.
      return out;
    }
  });
