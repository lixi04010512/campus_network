//修改师资队伍中老师信息
$.ajax({
    type:"GET",
    url:"/Mteacher/sub1",
    success:function(data){
       document.getElementById('update').innerHTML =data.data.map(i =>`
       <span>请输入教师姓名</span>
       <input type="text" name="teacher_name1" class="teacher_name1" value="${i.teacher_name}">
       <br>
       <span>请上传教师图片</span>
       <input type="file" name="teacher_image1" class="teacher_image1" value="${i.teacher_image}">
       <br>
       `
    )}
})

//修改后的提交按钮
    $('#sub').click(function(){
        var str=$(".teacher_image1").val();
           var arr=str.split('\\');
           var my=arr[arr.length-1];
        $.ajax({
            type:"POST",
            url:"/Mteacher/sub",
            data:{"teacher_name1":$(".teacher_name1").val(),"teacher_image1":my},
            success:function(data){
              if(data.data==1){
             window.location.href="/Mteacher"
            }
        }
    })
})