const nodemailer = require('nodemailer');

//创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',    //发送端邮箱类型（QQ邮箱）
    port: 465,      //端口号
    secure: true, 
    auth: {
        user: '1784420499@qq.com', // 发送方的邮箱地址（自己的）
        pass: 'vuhzelmmdpjgedjf' // mtp 验证码
    }
});

function send(use_email, code) {
    let mailObj = {
        from: '"深圳大学校园网注册验证码" <1784420499@qq.com>',   // 邮件名称和发件人邮箱地址
        to: use_email,   //收件人邮箱地址
        subject: '验证邮箱',   //邮件标题
        text: '您的验证码是：'+ code, // 邮件内容
    }
    // 发送邮件(封装成一个promise对象)，方便后面调用该方法
    return new Promise((resolve, reject)=>{
        transporter.sendMail(mailObj, (err, data) => {
            if(err){
                reject()    //出错
            }else{
                resolve()    //成功
            }
        })
    })
}

module.exports = { send }