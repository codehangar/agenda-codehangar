(function() {
  "use strict";
  angular
    .module('utils.codehangar')
    .factory('AuthSvc', function($http) {

      this.login = function(creds){
        return $http
        .post('/login', creds)
        .then(function (res) {
          // Session.create(res.data.id, res.data.user.id,
          //                res.data.user.role);
          return res.data.user;
        });
      }
      
      // var BASE_CONFIG = {
      //   headers: {
      //     "Content-Type": 'application/vnd.api+json'
      //   },
      //   method: 'POST',
      //   url: '/auth/',
      //   params: {
      //     apikey: '932407d3-d4bd-4beb-8cd2-f4356036b6fc',
      //     legislative_session: 2016,
      //   }
      // };

      // this.fetchBillsThisSession = function(params) {
      //   var requestConfig = angular.merge({}, BASE_CONFIG, {
      //     params: params
      //   });
      //   return $http(requestConfig);
      // };

      // this.fetchBillsCustomParams = function(params) {
      //   var requestConfig = angular.merge({}, BASE_CONFIG, {
      //     params: params
      //   });
      //   return $http(requestConfig)
      // };

      // this.fetchBillByID = function(id) {
      //   id = id.replace('_', '/');
      //   var requestConfig = angular.merge({}, BASE_CONFIG, {
      //     url: 'https://www.tabsontallahassee.com/api/' + id
      //   });
      //   return $http(requestConfig);
      // };

      // this.fetchNext = function(url) {
      //   var requestConfig = angular.merge({}, BASE_CONFIG, {
      //     url: url
      //   });
      //   return $http(requestConfig);
      // }

      // this.addCustomBillFields = function(bill) {
      //   bill.hashIdentifier = '#' + bill.attributes.identifier.replace(/\s/g, '');
      //   bill.billId = bill.id.replace(/\//g, '_');
      //   bill.billLink = 'http://www.flvote.org/bills/' + bill.billId;
      //   return bill;
      // }
      this.hello = function(){
        console.log('hello')
      }

      return this;

    });
})();
