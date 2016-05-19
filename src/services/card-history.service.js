(function() {
  'use strict';

  angular
    .module("utils.codehangar")
    .factory("CardHistory", service);

  service.$inject = [];

  function service() {

    var history = [];

    try {
      var storedCards = JSON.parse(localStorage.cardHistory);
      if (storedCards) {
        history = storedCards;
      }
    } catch (e) {}

    this.save = function(cards) {
      console.log("save card", cards)
      console.log("typeof cards", typeof cards)
      if (!cards || !cards instanceof Array) {
        throw new Error('cards are required!');
      }
      history = angular.copy(cards);
      localStorage.cardHistory = JSON.stringify(history);
    };

    this.add = function(card) {
      console.log("history", history)
      history.push(card);
      this.save(history);
    };

    this.remove = function(card) {
      history.splice(history.indexOf(token), 1);
      this.save(history);
    };

    this.get = function() {
      return angular.copy(history);
    };

    return this;

  }
})();
