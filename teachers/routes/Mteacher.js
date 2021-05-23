var express = require('express');
var formidable = require("formidable");
var fs = require("fs");
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mteacher');
});

//增加师资队伍中老师的信息
router.post("/",(request,response) => {
	connection = formidable({
		multiples: true,
        uploadDir: `${__dirname}/images`  // 指定图片存放的目录为当前文件夹的images
	})
	form.parse(request,(err,fileds,files) => {
		if(files.hasOwnProperty("avatar")) {
			const {
               	path,
                name
            } = files.avatar
            fs.readFile(path,"base64",(err,data) => {
                console.log(data);
                const sql = `insert into tab_teachers (teacher_image) values $(data)`
            })
		}
		response.send("错误")
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
	  res.json({listTeacher:results});
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
	var query="update tab_teachers set teacher_name='"+teacher_name1+"',teacher_image='"+teacher_image1+"' where teacher_name='"+arr[0].teahcer_name+"'  ";
	connection.query(query,(err,results,fields) =>{
	  if(err){
	   console.log(err);
	   return;
	 }
	res.json({"data":1});
 })
})

module.exports = router;
