var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('talk');
});

//展示值在页面
 router.get('/discuss',(req,res) =>{
  var query = "select * from tab_notice ";
  
  connection.query(query,(err,results,fields)=>{
    res.json({list:results});
  })
})  

//查询
router.post('/find',(req,res)=>{
  let data=req.body.data;
  var query = "select title,content from tab_notice where title like '%"+data+"%' or content like'%"+data+"%' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({list:results});
  })
})


module.exports = router;
