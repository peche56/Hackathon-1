angular.module('app')



.service('webcamService', function($http) {
    return {
        getOne: function(query) {
          var reqwebcam = {
            method: 'GET',
            url: "https://webcamstravel.p.mashape.com/webcams/list/country=" + query,
            headers: {
              "X-Mashape-Key" : "0d6eCxYwyzmsheigDv3bbsNP83nDp1ieAzejsn3qf4uCzZtGwX"
            }
          };
            return $http(reqwebcam);
        },
    };
});
