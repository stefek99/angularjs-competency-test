var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./userdata').userSchema; // TODO: potentially stick to a better naming convention (TBD)

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
  var userData = req.body;

  var user = new User(userData);

  user.save(function (err) {
    if (err) {
      res.send(error); // TODO: in production don't send error message to the client
      return console.error(err);
    }
    
    res.send("OK");
  });
});
