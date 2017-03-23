angular.module('app')
    .controller('MainController', function($scope, webcamService) {


        $scope.query = "";
        $scope.goSearch = function() {

            // OMDB API
            webcambService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
            });
        };
    });
