//修改师资队伍中老师信息js
$.ajax({
    type:"GET",
    url:"/Mteacher/sub1",
    success:function(data){
       document.getElementById('update').innerHTML =data.data.map(i =>`
       <span>请上传教师图片</span>
       <input name="avatar" type="file" id="reacher_image1" value="${i.teacher_image}">
       <br>
       <span>请输入教师姓名</span>
       <input type="text" name="name" id="teacher_name1" value="${i.teacher_name}">
       <br>
       `
       )}
})

    $('#sub').click(function(){
        $.ajax({
            type:"POST",
            url:"/Mteacher/sub",
            data:{"teacher_image1":$("#teacher_image1").val(),"teacher_name1":$("#teacher_name1").val()},
            success:function(data){
                console.log(data.data);
              if(data.data==1){
             window.location.href="/Mteacher"
              }
            }
        })
    })