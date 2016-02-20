var express = require('express');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 3000)); // required for heroku
app.use(express.static(path.join(__dirname, 'static/app')));

app.listen(app.get('port'), function() {
  console.log("server started: http://localhost:" + app.get('port'));
});