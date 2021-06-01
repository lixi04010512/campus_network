var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('add_comment');
});

router.post('/',(req,res)=>{
  let comment =req.body.comment;

var query='insert into tab_discuss(comment) values("'+comment+'") ';
connection.query(query,(err,results,fields)=>{
    res.json({"status":1});
  })
})


module.exports = router;
