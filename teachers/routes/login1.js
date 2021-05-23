var express = require('express');
var connection =require('./database.js');
var router = express.Router();
var md5 =require("md5");

router.get('/', function(req, res, next) {
  res.render('login1');
});

router.post('/',(req,res)=>{
  let use_name=req.body.name;
  let use_password1=req.body.password;
  let use_password=md5(use_password1);
  var query = "select name,password from tab_manage where name = '"+use_name+"' and password = '"+use_password+"'";
  
  connection.query(query,(err,results,fields)=>{
    var u = results[0];
    if(!u){
      res.json({"status":-1});
    }else{
      res.json({"status":1});
    }
  })
});

module.exports = router;
