var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var arr =new Array();

router.post('/',(req,res)=>{
  var query = "select name,phone,major,teach_year from tab_teacher";
  
  connection.query(query,(err,results,fields)=>{
      arr=results;
      res.json({list:arr});
    })
  })


router.get('/', function(req, res, next) {
  res.render('touch');
});

module.exports = router;
