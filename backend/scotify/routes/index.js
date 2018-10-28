var express = require('express');
var router = express.Router();
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/translate', (req, res, next) => {
  //TODO: business logic goes here.
  var text = 'The data was: ' + req.query.text;
  var data = {data: text};
  //Return the JSON array of data back to the client.
  res.send(data);
});

module.exports = router;
