angular.module('app')
    .controller('MainController', function($scope, webcamService, $sce) {


        $scope.query = "FR";
        $scope.goSearch = function() {

          if ($scope.query === "france") {
            $scope.query = "FR";
          }

          else if ($scope.query === "allemagne") {
            $scope.query = "DE";
          }

          else if ($scope.query === "espagne") {
            $scope.query = "ES";
          }

          else if ($scope.query === " royaume-uni") {
            $scope.query = "GB";
          }

          else if ($scope.query === "italie") {
            $scope.query = "IT";
          }

          else if ($scope.query === " etats-unis") {
            $scope.query = "US";
          }

          else if ($scope.query === "japon") {
            $scope.query = "JP";
          }

          else if ($scope.query === "portugal") {
            $scope.query = "PT";
          }

          else if ($scope.query === "sri lanka") {
            $scope.query = "LK";
          }

          else if ($scope.query === "suisse") {
            $scope.query = "CH";
          }
          else if ($scope.query === "australie") {
            $scope.query = "AU";
          }
          else if ($scope.query === "chine") {
            $scope.query = "CN";
          }


            // webcam API
            webcamService.getOne($scope.query).then(function(response) {
                $scope.details = response.data;
                $scope.title1 = $scope.details.result.webcams[0].title;
                $scope.title2 = $scope.details.result.webcams[1].title;
                $scope.title3 = $scope.details.result.webcams[2].title;
                $scope.title4 = $scope.details.result.webcams[3].title;
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
