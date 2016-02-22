app.controller("InputController", function($scope, $location, countries, BackendService) {

  $scope.countries = countries.data;

  $scope.name = "M"
  $scope.sex = "Male"
  $scope.age = 12
  $scope.country = "Albania"

  $scope.submitForm = function() {
    var userData = {
      name : $scope.name,
      sex : $scope.sex,
      age : $scope.age,
      country : $scope.country
    };

    console.log(userData);

    BackendService.save(userData).then(function(response) {
      $location.path('/thankyou/').search({name: $scope.name});
    }, function(response) {
      alert("Something on the backend went wrong.");
    });
  }

});