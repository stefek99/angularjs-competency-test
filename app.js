var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
app.set('port', (process.env.PORT || 3000)); // required for heroku
app.use(express.static(path.join(__dirname, 'static/app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.listen(app.get('port'), function() {
  console.log("server started: http://localhost:" + app.get('port'));
});

app.post("/api/user", function(req, res) {
  var data = req.body;
  console.log(data);

  res.send(data);
});
/*
mongoose.connect('mongodb://localhost/angulartest');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = mongoose.Schema(
  {
      name: String,
      sex: String, // initially thought to use true / false TODO: figure our some better validation here: http://mongoosejs.com/docs/validation.html
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

var user = new User({ 
  name: 'Silence',
  sex: 'male',
  age: 16,
  country: 'Poland'
});

user.save(function (err) {
  if (err) return console.error(err);
  
  console.log("saved!");
});
*/