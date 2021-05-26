var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var arr =new Array();


router.get('/', function(req, res, next) {
  res.render('detail');
});

router.post('/',(req,res) =>{
    res.json({"status":1});
});

router.post('/search',(req,res)=>{
  var query = "select title,detail from tab_detail";
  
  connection.query(query,(err,results,fields)=>{
      arr=results;
      res.json({list:arr});
    })
  })



module.exports = router;
