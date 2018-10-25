var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/translate', (req, res) => {
  res.render('index');
});

router.get('/translate/:id', (req, res) => {
  res.send('url: ' + req.params.id);
});

module.exports = router;
