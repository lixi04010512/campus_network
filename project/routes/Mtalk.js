var express = require('express');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mtalk');
});

 router.get('/discuss',(req,res) =>{
  var query = "select name,title,content,comment,like from tab_discuss ";
  connection.query(query,(err,results,fields)=>{
    res.json({"list":results});
  })
})  

module.exports = router;
