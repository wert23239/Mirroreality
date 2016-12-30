(function() {
    'use strict';

    function HelloService($http) {
        var service = {};
        service.mainData = null;
        service.string = "";

        service.init = function(){
          return $http.get('https://mirror-7ff2d.firebaseio.com/.json').
              then(function(response) {
                  return service.mainData = response.data;
              });
            };

        service.mainDataMessage = function() {
           return service.mainData;
        }

        return service;
    }

    angular.module('SmartMirror')
        .factory('HelloService', HelloService);

}());
