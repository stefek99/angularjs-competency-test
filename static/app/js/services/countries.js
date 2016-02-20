app.service("CountriesService", function($http) {
  var service = {};

  service.get = function() {
    return $http.get("https://restcountries.eu/rest/v1/region/Europe");
  };

  return service;
})