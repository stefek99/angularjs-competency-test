app.service("BackendService", function($http) {
  var service = {};

  service.save = function(userData) {
    return $http.post("/api/user", userData);
  };

  return service;
})