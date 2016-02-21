var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "templates/input.html",
      controller: "InputController",
      resolve: {
        countries: function(CountriesService) {
          return CountriesService.get();
        }
      }
    })
    .when('/thankyou', {
      templateUrl: "templates/thankYou.html",
      controller: "ThankYouController"
    })
    .otherwise({redirectTo: '/'});
}]);

app.controller("ctrl", function($scope, $http, $location) {

});