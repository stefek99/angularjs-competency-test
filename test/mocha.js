var assert = require('assert');
var User = require('./../userdata').userSchema;


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe("database persistence", function() {
  it("should save the user", function() {
    var user = new User({
      name: "Michal Stefanow",
      sex: "Male",
      age: 29,
      country: "UK"
    });

    user.save(function (err) {
      if (err) {
        return console.error(err);
      }
      
      expect(true).toBe(true);
    });
  })
});