var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('update_talk');
})

module.exports = router;
