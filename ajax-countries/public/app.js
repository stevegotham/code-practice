(function() {
  'use strict';
  angular.module('ajax', [])
    .controller('ajaxCtrl', ['$http', ajaxCtrl])

    function ajaxCtrl($http) {
      var aj = this;

      aj.countries = [];

      aj.getCountries = function() {
        $http.get('/countries').then(function(res) {
          aj.countries = res.data;
        });
      }
      aj.getCountry = function() {
        $http.get('/search?country='+aj.country).then(function(res) {
          console.log(res)
          aj.countries = [];
          aj.countries.push(res.data)
        })
      }


      // -=-=-=-=-=-=-=-=-==-=-=-=- closing tags
    }
}());
