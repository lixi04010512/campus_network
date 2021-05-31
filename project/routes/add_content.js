var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('add_content');
});

router.post('/',(req,res)=>{
    let name =req.body.name;
    let title=req.body.title;
    let content=req.body.content;

  var query='insert into tab_discuss(name,title,content) values("'+name+'","'+title+'","'+content+'") ';
  connection.query(query,(err,results,fields)=>{
      res.json({"status":1});
  })
})


module.exports = router;
