var express = require('express');
var router = express.Router();
var x=Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('atan applied to'+ x + 'is'+ Math.atan(x));
});

module.exports = router;
