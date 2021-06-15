var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('first_page');
})

router.post('/',(req,res)=>{
  var query = "select notice,content from tab_notice ";
  connection.query(query,(err,results,fields)=>{
    res.json({list:results});
  })
})

module.exports = router;
