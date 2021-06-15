var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var User =require('./bean/user');
var md5 =require("md5");
var email = require('./email_account.js');


router.get('/', function(req, res, next) {
    res.render('register');
})

//获取前端的参数,存入数据库
router.post('/',(req,res) =>{
  let use_name=req.body.use_name;
  let use_password1=req.body.use_password;
  let use_password=md5(use_password1);
  let user=new User(use_name,use_password);
  let use_email=req.body.use_email;
  var query = 'insert into tab_account(name,password,email) values("'+user.use_name+'","'+user.use_password+'","'+use_email+'")'
  connection.query(query, (err,results,fields)=> {
      res.json({"status":1})
      })
})

//生成验证码随机数
function MathRand(){
    var Num="";
    for(var i=0;i<6;i++){
      Num+=Math.floor(Math.random()*10);
    }
      return  Num;
}

//发送验证码按钮
   let random=null;
   router.post('/random',(req,res)=>{
   let use_email=req.body.use_email;
   random=MathRand();
   email.send(use_email, random)
   .then(() => {
       res.json({"status":1,"random":random});
   })
   .catch(() => {
       res.json({"status":-1});
   })
})  

module.exports = router;