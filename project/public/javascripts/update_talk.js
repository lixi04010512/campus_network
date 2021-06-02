//修改招生简章js
$.ajax({
    type:"GET",
    url:"/Mtalk/sub1",
    success:function(data){
       document.getElementById('update').innerHTML =data.data.map(i =>`
        <span>标题:</span>
        <input type="text" id="title1" name="title1" value="${i.title}">
    </br>
        <span>内容:</span>
        <input type="text" id="content1" name="content1" value="${i.content}">
    </br>
       `
   )}
})

//提交按钮
$('#sub').click(function(){
    $.ajax({
        type:"POST",
        url:"/Mtalk/sub",
        data:{"title1":$("#title1").val(),"content1":$("#content1").val()},
        success:function(data){
                console.log(data.data);
              if(data.data==1){
             window.location.href="/Mtalk"
            }
        }
    })
})