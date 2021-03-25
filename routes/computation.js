var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var x=Math.random();
  res.send('atan applied to'+ x + 'is'+ Math.atan(x));
});

module.exports = router;
