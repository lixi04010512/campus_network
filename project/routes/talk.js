var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('talk');
});

router.post('/out',(req,res)=>{
  res.json({"status":1});
})

//获取前端的参数,存入数据库
router.post('/',(req,res) =>{
  let name=req.body.name;
  let content=req.body.content;
  var query = 'insert tab_discuss(name,content) values("'+name+'","'+content+'")'
  connection.query(query, (err,results,fields)=> {
      })
   })

 router.get('/discuss',(req,res) =>{
  var query = "select * from tab_discuss ";
  
  connection.query(query,(err,results,fields)=>{
    res.json({list:results});
  })
})  


module.exports = router;
