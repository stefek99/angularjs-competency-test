var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/', {
  	  templateUrl: "templates/input.html",
  	  controller: "InputController"
  	})	
  	.when('/thankyou', {
  	  templateUrl: "templates/thankyou.html"
  	})
  	.otherwise({redirectTo: '/'});
}]);

app.controller("ctrl", function($scope, $http, $location) {

});