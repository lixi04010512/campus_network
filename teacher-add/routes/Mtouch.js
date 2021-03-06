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
        })
     })
  //从数据库取值
     router.get('/teachers',(req,res) =>{
      var query = "select name,phone,major,teach_year from tab_teacher ";
    
      connection.query(query,(err,results,fields)=>{
        res.json({listTeacher:results});
      })
     })

     //删除
     router.post('/del',(req,res)=>{
        let name=req.body.name;
         var query="delete from tab_teacher where name='"+name+"' ";
         connection.query(query,(err,results,fields)=>{
          })
         })
    
         //修改
  var arr=new Array();
      
  router.post('/update',(req,res) =>{
  let name=req.body.name;
  var query="select * from tab_teacher where name='"+name+"' ";
  connection.query(query,(err,results,fields) =>{
     arr=results;
     res.json({"data":1})
  })
  })

  router.get('/sub1',(req,res) =>{
    console.log(arr)
    res.json({"data":arr});
  })

  router.post('/sub',(req,res)=>{
    let name1=req.body.name1;
    let phone1=req.body.phone1;
    let major1=req.body.major1;
    let teach_year1=req.body.teach_year1;

   var query="update tab_teacher set name='"+name1+"',phone='"+phone1+"',major='"+major1+"',teach_year='"+teach_year1+"' where name='"+arr.name+"'  ";
   connection.query(query,(err,results,fields) =>{
      res.json({"data":1});
   })
 })

module.exports = router;
