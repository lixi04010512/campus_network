var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('add_comment');
});


module.exports = router;
