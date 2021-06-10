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

//取消点赞后展示在页面的值
router.get('/load_dis',(req,res) =>{
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

//点赞
router.post('/like',(req,res) =>{
  let title =req.body.title;
  var query="update tab_notice set love=love+1 where title='"+title+"' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({"status":1});
  })
})

//取消点赞
router.post('/dislike',(req,res) =>{
  let title =req.body.title;
  var query="update tab_notice set love=love-1 where title='"+title+"' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({"status":1});
  })
})

module.exports = router;
