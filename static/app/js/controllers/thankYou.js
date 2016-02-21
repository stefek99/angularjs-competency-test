app.controller("ThankYouController", function($scope, $location) {

  $scope.name = $location.search().name;

});