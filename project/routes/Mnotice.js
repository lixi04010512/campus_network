var express = require('express');
var Notice =require('./bean/notice');
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mnotice');
})

router.post('/',(req,res) =>{
  let notice=req.body.notice;
  let content=req.body.content;
  let notice1=new Notice(notice,content);
  var query = 'insert tab_notice(notice,content) values("'+notice1.notice+'","'+notice1.content+'")'
  connection.query(query, (err,results,fields)=> {

    })
})

router.get('/show',(req,res) =>{
   var query = "select notice,content from tab_notice ";
      connection.query(query,(err,results,fields)=>{
         res.json({list:results});
   })
})

router.post('/del',(req,res)=>{
   let notice=req.body.notice;
   var query="delete from tab_notice where notice='"+notice+"' ";
       connection.query(query,(err,results,fields)=>{

  })
})

module.exports = router;
