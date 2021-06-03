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
             <td>${i.teacher_image}</td>
             <td>
                <input type="button" value="删除" data-id="${i.teacher_name}" class="del_data">
                <input type="button" value="修改" data-id="${i.teacher_name}" class="update_data">
             </td>
       </tr> 
             `).join("");
    }
 })
}
load();

 //新增按钮
//  class FormData{
//   constructor(file,teacher_name){
//       this.file=file;
//       this.teacher_name=teacher_name;
//   }
// }
$('#teachersAdd').click(function(){
   //图片上传
    //  let formData = new FormData();
    //  formData.append("file",$('#file')[0].files[0]);
    //  formData.append("teacher_name",$('#teacher_name').val());
    //  console.log(formData);
      $.ajax({
              type:"POST",
              url:"/Mteacher",
              data:{"file":$('#file')[0].files[0],"teacher_name":$('#teacher_name').val()},
              success:function(data){
                  load();
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