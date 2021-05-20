var express = require('express');
var formidable = require("formidable");
var fs = require("fs");
var connection =require('./database.js');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Mteacher');
});

router.post("/",(request,response) => {
	const form = formidable({
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
		response.send("小火车")
	})
})

module.exports = router;
