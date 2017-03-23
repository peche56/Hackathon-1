angular.module('app')
    .controller('MainController', function($scope, webcamService, $sce) {


        $scope.query = "";
        $scope.goSearch = function() {

            // webcam API
            webcamService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
                $scope.title = $scope.details.result.webcams[0].title;
                console.log($scope.details.result);





//2EME ETAPE
                var idcam1 = $scope.details.result.webcams[0].id;
                var idcam2 = $scope.details.result.webcams[1].id;
                var idcam3 = $scope.details.result.webcams[3].id;
                var idcam4 = $scope.details.result.webcams[4].id;

                console.log(idcam1);


                $scope.bindHTML1 = $sce.trustAsResourceUrl("https://api.lookr.com/embed/timelapse/" + idcam1 + "/lifetime");
                $scope.bindHTML2 = $sce.trustAsResourceUrl("https://api.lookr.com/embed/timelapse/" + idcam2 + "/lifetime");
                $scope.bindHTML3 = $sce.trustAsResourceUrl("https://api.lookr.com/embed/timelapse/" + idcam3 + "/lifetime");
                $scope.bindHTML4 = $sce.trustAsResourceUrl("https://api.lookr.com/embed/timelapse/" + idcam4 + "/lifetime");

                console.log();



});

        };
    });
