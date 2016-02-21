app.controller("InputController", function($scope, $location, countries, BackendService) {

  $scope.countries = countries.data;

  $scope.name = "M"
  $scope.sex = "male"
  $scope.age = 12
  $scope.country = "Albania"

  $scope.submitForm = function() {
    var userData = {
      name : $scope.name,
      sex : $scope.sex,
      age : $scope.age,
      country : $scope.country
    };

    BackendService.save(userData).then(function(response) {
      $location.path('/thankyou/').search({name: $scope.name});
    }, function() {
      alert("Some error eccured");
    });
  }

});