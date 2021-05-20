var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var User =require('./bean/user');
var md5 =require("md5");

router.get('/', function(req, res, next) {
  res.render('register');
});

//获取前端的参数,存入数据库
router.post('/',(req,res) =>{
  let use_name=req.body.use_name;
  let use_password1=req.body.use_password;
  let use_password=md5(use_password1);
  let user=new User(use_name,use_password);
  var query = 'insert tab_account(name,password) values("'+user.use_name+'","'+user.use_password+'")'
  connection.query(query, (err,results,fields)=> {
    res.send("注册成功！");
      })
   })

module.exports = router;