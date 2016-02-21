app.controller("InputController", function($scope, $location, countries) {

  $scope.countries = countries.data;


  $scope.name = "M"
  $scope.sex = "male"
  $scope.age = 12
  $scope.country = "Albania"


  $scope.submitForm = function() {
    var data = {
      name : $scope.name,
      sex : $scope.sex,
      age : $scope.age,
      country : $scope.country
    };

    console.log(data);

    $location.path('/thankyou/').search({name: $scope.name});
  }

});