var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.render('Mtalk');
});

//新增公告通知
router.post('/',(req,res) =>{
  let title=req.body.title;
  let content=req.body.content;
  var query = 'insert tab_notice(title,content) values("'+title+'","'+content+'")'
  connection.query(query, (err,results,fields)=> {
    if(err){
      console.log(err);
      return;
    }
    res.json({"add":1});
  })
})

//从数据库取值
   router.get('/discuss',(req,res) =>{
    var query = "select * from tab_notice ";
    connection.query(query,(err,results,fields)=>{
      if(err){
        console.log(err);
        return;
      }
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

//删除
  router.post('/del',(req,res)=>{
    let title=req.body.title;
    var query="delete from tab_notice where title='"+title+"' ";
    connection.query(query,(err,results,fields)=>{
      if(err){
        console.log(err);
        return;
      }
      res.json({"del":1});
    })
  })
  
//修改
 var arr=new Array();
  router.post('/update',(req,res) =>{
    let title=req.body.title;
    var query="select * from tab_notice where title='"+title+"' ";
    connection.query(query,(err,results,fields) =>{
      if(err){
        console.log(err);
        return;
      }
       arr=results;
       res.json({"data":1})
   })
})

//修改联系老师页面模板字符串
  router.get('/sub1',(req,res) =>{
    res.json({"data":arr});
})

//修改页面提交按钮
  router.post('/sub',(req,res)=>{
    let title1=req.body.title1;
    let content1=req.body.content1;
    var query="update tab_notice set title='"+title1+"',content='"+content1+"' where title='"+arr[0].title+"'  ";
    connection.query(query,(err,results,fields) =>{
      if(err){
       console.log(err);
       return;
     }
    res.json({"data":1});
 })
})


module.exports = router;
