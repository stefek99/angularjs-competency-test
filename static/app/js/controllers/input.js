app.controller("InputController", function($scope, countries) {
  $scope.countries = countries.get();
});