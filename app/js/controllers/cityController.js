angular.module('app')
    .controller('CityController', function($scope, $routeParams) {
        console.log($routeParams.city);
    });
