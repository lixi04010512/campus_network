//师资队伍管理
$.ajax({
      type:"GET",
      url:"/Mteacher/teachers",
      success:function(data){
       $("#Teachers").empty();
       document.getElementById("Teachers").innerHTML = data.listTeachers.map(i =>`
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

 //新增按钮
$('#teachersAdd').click(function(){
    $.ajax({
        type:"POST",
        url:"/Mteacher",
        data:{"teacher_name":$("#teacher_name").val()},
        success:function(data){
          if(data.status==1){
            window.location.href="/Mteacher"
          }
      }
   })
})
  
//删除按钮
  $("#Teachers").delegate(".del_data","click",function(){
   $.ajax({
        type:"POST",
        url:"/Mteacher/del",
        data:{"name":$(this).data("id")},
        success:function(data){
            window.location.href="/Mteachers"
    }
  })
  })
  
//修改按钮
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