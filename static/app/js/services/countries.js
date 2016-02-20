app.service("countries", function() {
  var service = {};

  service.get = function() {
    return [1,2,3];
  };

  return service;
})