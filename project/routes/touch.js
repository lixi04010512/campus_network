var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var arr =new Array();

router.get('/', function(req, res, next) {
  res.render('touch');
});

router.post('/',(req,res)=>{
  var query = "select name,phone,major,teach_year from tab_teacher";
  
  connection.query(query,(err,results,fields)=>{
      arr=results;
      res.json({list:arr});
    })
})

//查询
router.post('/find',(req,res)=>{
  let data=req.body.data;
  var query = "select name,phone,major,teach_year from tab_teacher where name like '%"+data+"%' or phone like'%"+data+"%' or major like'%"+data+"%' or teach_year like'%"+data+"%' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({list:results});
  })
})

module.exports = router;
