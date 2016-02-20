app.controller("InputController", function($scope, countries) {

  $scope.countries = countries.data;

  $scope.submitForm = function() {
    var data = {
      name : $scope.name,
      sex : $scope.sex,
      age : $scope.age,
      country : $scope.country
    };

    console.log(data);
  }

});