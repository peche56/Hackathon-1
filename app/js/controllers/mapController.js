angular.module('app')
    .controller('MapController', function($scope, mapService) {


        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
            webcambService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
            });
        };
    });
