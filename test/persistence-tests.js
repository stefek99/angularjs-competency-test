var assert = require('assert');
var userdata = require('./../userdata');

describe("database persistence", function() {

  var user = {
    name: "Michal Stefanow",
    sex: "Male",
    age: 29,
    country: "UK"
  };

  it("should return a number when asked for collection count", function() {
    userdata.count().then(function(result) {
      assert.isNumber(result);
    });
  });

  it("it should increase number of items in the collection after inserting the user", function() {
    var userId, count1, count2;

    userdata.count()
      .then(function(count) {
        count1 = count;
        return userdata.save(user);
      })
      .then(function(userObject) {
        userId = userObject._id;
        return userdata.count();
      })
      .then(function(count) {
        count2 = count;
        assert.equal(count1 + 1, count2);
        return userdata.remove(userId);
      }).then(function() {
        // removing the user, not expecting anything else here
        return userdata.count();
      }).then(function(count) {
        assert.equal(count1, count);
      })
  });

  it("it should persist the user with the correct data", function() {
    userdata.save(user)
      .then(function(userObject) {
        return userdata.get(userObject._id);
      })
      .then(function(userObject) {
        assert.equal(user.name, userObject.name);
        assert.equal(user.sex, userObject.sex);
        assert.equal(user.age, userObject.age);
        assert.equal(user.country, userObject.country);
        return userdata.remove(userObject._id); // need to clean
      })
  });
});