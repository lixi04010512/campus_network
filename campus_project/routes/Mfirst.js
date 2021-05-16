var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mfirst');
});

router.post('/',(req,res) =>{
  res.json({"status":1});
});

module.exports = router;
