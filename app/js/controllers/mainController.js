angular.module('app')
    .controller('MainController', function($scope, webcamService) {


        $scope.query = "";
        $scope.goSearch = function() {

            // webcam API
            webcamService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
                console.log($scope.details.result.webcams[0].id);





//2EME ETAPE
                var idcam = $scope.details.result.webcams[0].id;
                console.log(idcam);



            });
        };
    });
