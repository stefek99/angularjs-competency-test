var q = require('q');
var mongoose = require('mongoose');
var credentials = require("./database-credentials");

// TODO: Better of way initialising the detabase (dev, test, production)
// mongoose.connect('mongodb://localhost/angulartest');

mongoose.connect("mongodb://" + credentials.username + ":" + credentials.password + "@ds055485.mongolab.com:55485/angularjs-competency-test");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = mongoose.Schema(
  {
      name: String,
      sex: String, // TODO: better validation here: http://mongoosejs.com/docs/validation.html
      age: Number,
      country: String
  }, 
  { 
    timestamps: { 
      createdAt: 'dateCreated' 
    },
    collection: 'userdata' 
  }
);
var User = mongoose.model('userdata', userSchema);

var save = function(userdata) {
  var defer = q.defer();

  var user = new User(userdata);
  
  user.save(function (err, user) {
    if (err) {
      defer.reject(err);
      return;
    }
    
    defer.resolve(user);
  });

  return defer.promise;
};

var count = function() {
  var defer = q.defer();

  User.count({}, function(err, count){
    if (err) {
      defer.reject(err);
      return;
    }

    defer.resolve(count);
  })
  return defer.promise;
};

var remove = function(id) {
  var defer = q.defer();

  User.remove({ _id: id }, function(err) {
    if (err) {
      defer.reject(err);
      return;
    }

    defer.resolve();
  })
  return defer.promise;
};

var get = function(id) {
  var defer = q.defer();

  User.findOne({ _id: id }, function(err, user) {
    if (err) {
      defer.reject(err);
      return;
    }

    defer.resolve(user);
  })
  return defer.promise;
};

module.exports = {
  save : save,
  count : count,
  remove : remove,
  get : get
};