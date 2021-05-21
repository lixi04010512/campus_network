var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mtouch');
});

//新增联系老师
router.post('/',(req,res) =>{
    let name=req.body.name;
    let phone=req.body.phone;
    let major=req.body.major;
    let teach_year=req.body.teach_year;
    var query = 'insert tab_teacher(name,phone,major,teach_year) values("'+name+'","'+phone+'","'+major+'","'+teach_year+'")'
    connection.query(query, (err,results,fields)=> {
      if(err){
        console.log(err);
        return;
      }
    })
  })

//从数据库取值
    router.get('/teachers',(req,res) =>{
      var query = "select name,phone,major,teach_year from tab_teacher ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
        res.json({listTeacher:results});
      })
  })

//删除
    router.post('/del',(req,res)=>{
      let name=req.body.name;
      var query="delete from tab_teacher where name='"+name+"' ";
      connection.query(query,(err,results,fields)=>{
        if(err){
          console.log(err);
          return;
        }
      })
    })
    
//修改
   var arr=new Array();
    router.post('/update',(req,res) =>{
      let name=req.body.name;
      var query="select * from tab_teacher where name='"+name+"' ";
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
      let name1=req.body.name1;
      let phone1=req.body.phone1;
      let major1=req.body.major1;
      let teach_year1=req.body.teach_year1;
      var query="update tab_teacher set name='"+name1+"',phone='"+phone1+"',major='"+major1+"',teach_year='"+teach_year1+"' where name='"+arr[0].name+"'  ";
      connection.query(query,(err,results,fields) =>{
        if(err){
         console.log(err);
         return;
       }
      res.json({"data":1});
   })
 })

module.exports = router;
