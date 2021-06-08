//师资队伍管理
function load(){
$.ajax({
      type:"GET",
      url:"/Mteacher/teachers",
      success:function(data){
       $("#Teachers").empty();
       document.getElementById("Teachers").innerHTML = data.listTeachers.map(i =>`
       <tr>
             <td>${i.teacher_name}</td>
             <td><img src="${i.teacher_image}" style="width:200px;height:100px"></td>
             <td>
                <input type="button" value="删除" data-id="${i.teacher_name}" class="del_data">
                <input type="button" value="修改姓名" data-id="${i.teacher_name}" class="update_data">
                <input type="button" value="修改照片" class="update_photo">
                </td>
       </tr> 
             `).join("");
      }
  })
}
load();

//新增按钮
$("#teachersAdd").click(function(){
       var str=$("#img").val();
       var arr=str.split('\\');
       var my=arr[arr.length-1];
      $.ajax({
           type:"POST",
           url:"/Mteacher",
           data:{"img":my,"teacher_name":$('#teacher_name').val()},
           success:function(data){
                if(data.status==1){
                   load();
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
            if(data.status==1){
              load();
            }
       }
   })
})
  
//修改姓名按钮
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

//修改照片按钮
$("#Teachers").delegate(".update_photo","click",function(){
   $.ajax({
        type:"POST",
        url:"/Mteacher/update_photo",
        success:function(data){
            if(data.status==1){
               window.location.href="/update_photo";
            }
       }
   })
})