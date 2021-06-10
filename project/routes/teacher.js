var express = require('express');
var router = express.Router();
var connection =require('./database.js');
var arr =new Array();

router.get('/', function(req, res, next) {
  res.render('teacher');
})

router.post('/',(req,res)=>{
  var query = "select teacher_name,teacher_image from tab_teachers";
  connection.query(query,(err,results,fields)=>{
      arr=results;
      res.json({list:arr});
    })
})

//查询
router.post('/find',(req,res)=>{
  let data=req.body.data;
  var query = "select teacher_name,teacher_image from tab_teachers where teacher_name like '%"+data+"%' ";
  connection.query(query,(err,results,fields)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json({list:results});
  })
})

module.exports = router;
