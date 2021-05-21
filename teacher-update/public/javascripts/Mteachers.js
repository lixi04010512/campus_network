//师资队伍管理
$.ajax({
    type:"GET",
      url:"/Mteacher",
      success:function(data){
       $("#Teachers").empty();
       document.getElementById("Teachers").innerHTML = data.listTeacher.map(i =>`
       <tr>
             <td>${i.teacher_name}</td>
             <td>${i.teacher_image}</td>
             <td>
                <input type="button" value="删除" data-id="${i.teacher_name}" class="del_data">
                <input type="button" value="修改" data-id="${i.teacher_name}" class="update_data">
             </td>
       </tr> 
             `).join("");
    }
 })

 
$('#teachersAdd').click(function(){
    $.ajax({
        type:"POST",
        url:"/Mteacher",
        data:{"name":$("#name").val(),"phone":$("#phone").val()},
        success:function(data){
            window.location.href="/Mteacher"
      }
   })
})
  
  $("#Teachers").delegate(".del_data","click",function(){
   $.ajax({
        type:"POST",
        url:"/Mteacher/del",
        data:{"name":$(this).data("id")},
        success:function(data){
            window.location.href="/Mteacher"
    }
  })
  })
  
  $("#Teachers").delegate(".update_data","click",function(){
   $.ajax({
        type:"POST",
        url:"/Mteacher/update",
        data:{"name":$(this).data("id")},
        success:function(data){
            if(data.data==1){
                window.location.href="/update_teachers";
            }
    }
  })
  })