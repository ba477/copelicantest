'use strict';
var appTest =  angular.module('SampleApp', ['ngRoute', 'ngAnimate']);


appTest.config([
        '$locationProvider',
        '$routeProvider',
        function($locationProvider, $routeProvider) {
            $routeProvider
                .when("/home", {
                    templateUrl: "partials/main.html",
                    controller: "MainController"
                })
                .when("/dispo", {
                    templateUrl: "partials/dispo.html",
                    controller: "disposController"
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ]);

//Load controller
angular.module('SampleApp')

    .controller('MainController', [
        '$scope',
        function($scope) {
            $scope.test = "Testing...";
        }
    ]);
appTest.controller("disposController" ,function ($scope, Dispo) {

    $scope.tri = 'villeDepart';

    Dispo.fetch().success(function(resp){
        $scope.dispos = resp;
    });
    

});
