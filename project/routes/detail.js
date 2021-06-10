var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var arr =new Array();


router.get('/', function(req, res, next) {
  res.render('detail');
})

router.post('/',(req,res) =>{
    res.json({"status":1});
})

router.post('/search',(req,res)=>{
  var query = "select title,detail from tab_detail";
  connection.query(query,(err,results,fields)=>{
      arr=results;
      res.json({list:arr});
    })
})

//查询
router.post('/find',(req,res)=>{
  let data=req.body.data;
  var query = "select title,detail from tab_detail where title like '%"+data+"%' or detail like '%"+data+"%'";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({list:results});
  })
})

module.exports = router;
