var express = require('express');
var formidable = require("formidable");
var connection =require('./database.js');
var path=require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Mteacher');
})

//增加师资队伍中老师的信息(图片，姓名)
router.post("/",(req,res) => {
	var form = formidable({
		multiples: true,
        uploadDir: path.join(__dirname,"../public/images")
	});
	form.parse(req, (err, fields, files) => {
		if (!files) {
			console.log("no");
			return;
		 }else{
			 let teacher_img=req.body.img;
			 let teacher_name=req.body.teacher_name;
			 var query='insert into tab_teachers(teacher_image,teacher_name) values("images/'+teacher_img+'","'+teacher_name+'")'
			 connection.query(query,(err,results,fields)=>{
				if(err){
					console.log(err);
					return;
				  }
				 res.json({"status":1})
			 })
		 }
	})
})		    

//从数据库取值
router.get('/teachers',(req,res) =>{
	var query = "select teacher_image,teacher_name from tab_teachers ";
	connection.query(query,(err,results,fields)=>{
	  if(err){
		console.log(err);
		return;
	  }
	  res.json({listTeachers:results});
	})
})

//删除
router.post('/del',(req,res)=>{
	let name=req.body.name;
	var query="delete from tab_teachers where teacher_name='"+name+"' ";
	connection.query(query,(err,results,fields)=>{
	  if(err){
		console.log(err);
		return;
	  }
	  res.json({"status":1});
	})
})

//修改
var arr=new Array();
router.post('/update',(req,res) =>{
	let name=req.body.name;
	var query="select * from tab_teachers where teacher_name='"+name+"' ";
	connection.query(query,(err,results,fields) =>{
	  if(err){
		console.log(err);
		return;
	  }
	   arr=results;
	   res.json({"data":1})
   })
})

//修改页面师资队伍中老师页面模板字符串
router.get('/sub1',(req,res) =>{
	res.json({"data":arr});
})

//修改页面提交按钮
router.post('/sub',(req,res)=>{
	let teacher_name1=req.body.teacher_name1;
	let teacher_image1=req.body.teacher_image1;
	var query="update tab_teachers set teacher_name='"+teacher_name1+"',teacher_image='images/"+teacher_image1+"' where teacher_name='"+arr[0].teacher_name+"'  ";
	connection.query(query,(err,results,fields) =>{
	  if(err){
	   console.log(err);
	   return;
	 }
	res.json({"data":1});
  })
})

//查询
router.post('/find',(req,res)=>{
    let data=req.body.data;
    var query = "select teacher_name,teacher_image from tab_teachers where teacher_name like '%"+data+"%' or teacher_image like'%"+data+"%' ";
    connection.query(query,(err,results,fields)=>{
      if(err){
        console.log(err);
        return;
      }
      res.json({list:results});
    })
})

module.exports = router;
