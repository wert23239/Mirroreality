(function() {
    'use strict';

    function HelloService($http) {
        var service = {};
        service.mainData = null;
        service.string = "";

        service.init = function(){
          return $http.get('https://youthful-rate-5549.nanoscaleapi.io/helloworld.json').
              then(function(response) {
                  return service.mainData = response.data;
              });
            };

        service.mainDataMessage = function() {
           return service.mainData.message;
        }

        return service;
    }

    angular.module('SmartMirror')
        .factory('HelloService', HelloService);

}());
