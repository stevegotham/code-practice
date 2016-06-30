// -=-=-=-=-=-=-=-=-=-=-=-=-= variables and requires
var express    = require('express');
var bodyParser = require('body-parser');
var countries  = require('./models/countries.json');
var app        = express();
var port       = 3000;

// -=-=-=-=-=-=-=-=-=-=-=-=-= configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// -=-=-=-=-=-=-=-=-=-=-=-=-= routes
app.get('/countries', function(req, res) {
  res.json(countries)
});
app.post('/search', function(req, res) {
  var result;
  for (var i=0; i<countries.length; i++) {
    if(countries[i].name == req.body.country) {
      result = countries[i];
    }
  }
  res.json(result);
})

// -=-=-=-=-=-=-=-=-=-=-=-=-= server set-up
app.listen(port, function() {
  console.log('Server listening on port ' + port)
})
