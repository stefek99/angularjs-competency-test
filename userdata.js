var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angulartest'); // for my localhost // TODO: config for deployment

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

module.exports = {
  userSchema : User
};