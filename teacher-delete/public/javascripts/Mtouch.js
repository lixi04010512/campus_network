//联系教师管理
$.ajax({
    type:"GET",
      url:"/Mtouch/teachers",
      success:function(data){
       $("#Teacher").empty();
       document.getElementById("Teacher").innerHTML = data.listTeacher.map(i =>`
       <tr>
             <td>${i.name}</td>
             <td>${i.phone}</td>
             <td>${i.major}</td>
             <td>${i.teach_year}</td>
             <td>
                <input type="button" value="删除" data-id="${i.name}" class="del_data">
                <input type="button" value="修改" data-id="${i.name}" class="update_data">
             </td>
       </tr> 
             `).join("");
 }
 })

$('#teacherAdd').click(function(){
  $.ajax({
      type:"POST",
      url:"/Mtouch",
      data:{"name":$("#name").val(),"phone":$("#phone").val(),"major":$("#major").val(),"teach_year":$("#teach_year").val()},
      success:function(data){
          window.location.href="/Mtouth"
  }
})
})

$("#Teacher").delegate(".del_data","click",function(){
 $.ajax({
      type:"POST",
      url:"/Mtouch/del",
      data:{"name":$(this).data("id")},
      success:function(data){
          window.location.href="/Mtouth"
  }
})
})

$("#Teacher").delegate(".update_data","click",function(){
 $.ajax({
      type:"POST",
      url:"/Mtouch/update",
      data:{"name":$(this).data("id")},
      success:function(data){
          if(data.data==1){
              window.location.href="/update";
          }
  }
})
})