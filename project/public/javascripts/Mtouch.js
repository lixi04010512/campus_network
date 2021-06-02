//联系教师管理

function load(){
$.ajax({
    type:"GET",
      url:"/Mtouch/teachers",
      success:function(data){
       $("#Teacher").empty();
       for( var i of data.listTeacher){
       $("#Teacher").append(`
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
             `)
       }
     }
  })
}
load();

//新增按钮
$('#teacherAdd').click(function(){
  $.ajax({
      type:"POST",
      url:"/Mtouch",
      data:{"name":$("#name").val(),"phone":$("#phone").val(),"major":$("#major").val(),"teach_year":$("#teach_year").val()},
      success:function(data){
          if(data.add ==1){
            load();
            $("#name").val("");
            $("#phone").val("");
            $("#major").val("");
            $("#teach_year").val("");
          }
      }
   })
})

//删除按钮
$("#Teacher").delegate(".del_data","click",function(){
 $.ajax({
      type:"POST",
      url:"/Mtouch/del",
      data:{"name":$(this).data("id")},
      success:function(data){
        if(data.del ==1){
          load();
        }
     }
   })
})

//修改按钮
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

//查询按钮
$("#sub_find").click(function(){
  $.ajax({
    type:"POST",
    url:"/Mtouch/find",
    data:{"data":$("#find").val()},
    success:function(data){
      $("#Teacher").empty();
      for( var i of data.list){
      $("#Teacher").append(`
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
            `)
      }
    }
  })
})