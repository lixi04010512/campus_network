var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mdetail');
});

//新增招生简章
router.post('/',(req,res) =>{
    let title=req.body.title;
    let detail=req.body.detail;
    var query = 'insert tab_detail(title,detail) values("'+title+'","'+detail+'")'
    connection.query(query, (err,results,fields)=> {
      if(err){
        console.log(err);
        return;
      }
      res.json({"add":1});
    })
  })

//从数据库取值
    router.get('/details',(req,res) =>{
      var query = "select title,detail from tab_detail ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
        res.json({listDetail:results});
      })
  })

//删除
    router.post('/del',(req,res)=>{
      let title=req.body.title;
      var query="delete from tab_detail where title='"+title+"' ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
        res.json({"del":1});
      })
    })

//查询
  router.post('/find',(req,res)=>{
    let data=req.body.data;
    var query = "select title,detail from tab_detail where title like '%"+data+"%' or detail like '%"+data+"%' ";
    connection.query(query,(err,results,fields)=>{
      if(err){
        console.log(err);
        return;
      }
      res.json({list:results});
    })
  })
//修改
   var arr=new Array();
    router.post('/update',(req,res) =>{
      let title=req.body.title;
      var query="select * from tab_detail where title='"+title+"' ";
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
      let detail1=req.body.detail1;
      var query="update tab_detail set title='"+title1+"',detail='"+detail1+"' where title='"+arr[0].title+"'  ";
      connection.query(query,(err,results,fields) =>{
        if(err){
         console.log(err);
         return;
       }
      res.json({"data":1});
   })
 })

module.exports = router;
