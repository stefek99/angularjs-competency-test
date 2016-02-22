var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var userdata = require('./userdata'); // TODO: potentially stick to a better naming convention (TBD)

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

  userdata.save(data).then(function(){
    res.sendStatus(200);
  }, function() {
    res.sendStatus(500);
  });
});
