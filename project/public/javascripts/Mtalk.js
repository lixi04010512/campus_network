//公告通知管理
function load(){
$.ajax({
    type:"GET",
    url:"/Mtalk/discuss",
    success:function(data){
          console.log(data.list);
     $("#Talk").empty();
     document.getElementById("Talk").innerHTML = data.list.map(i =>`
     <tr>
           <td>${i.title}</td>
           <td>${i.content}</td>
           <td>${i.love}</td>
           <td>
              <input type="button" value="删除" data-id="${i.title}" class="del_data">
              <input type="button" value="修改" data-id="${i.title}" class="update_data">
           </td>
     </tr> 
           `).join("");
    }
  })
}
load();

//新增按钮
$('#noticeAdd').click(function(){
      $.ajax({
          type:"POST",
          url:"/Mtalk",
          data:{"title":$("#title").val(),"content":$("#content").val()},
          success:function(data){
              if(data.add ==1){
                load();
                $("#title").val("");
                $("#content").val("");
           }
        }
    })
})
    
//删除按钮
$("#Talk").delegate(".del_data","click",function(){
     $.ajax({
          type:"POST",
          url:"/Mtalk/del",
          data:{"title":$(this).data("id")},
          success:function(data){
            if(data.del ==1){
              load();
        }
      }
   })
})
    
//修改按钮
$("#Talk").delegate(".update_data","click",function(){
     $.ajax({
          type:"POST",
          url:"/Mtalk/update",
          data:{"title":$(this).data("id")},
          success:function(data){
              if(data.data==1){
                  window.location.href="/update_talk";
              }
          }
    })
})
    
//查询按钮
$("#sub_find").click(function(){
      $.ajax({
        type:"POST",
        url:"/Mtalk/find",
        data:{"data":$("#find").val()},
        success:function(data){
            $("#Talk").empty();
            document.getElementById("Talk").innerHTML = data.list.map(i =>`
            <tr>
                  <td>${i.title}</td>
                  <td>${i.content}</td>
                  <td>${i.love}</td>
                  <td>
                     <input type="button" value="删除" data-id="${i.title}" class="del_data">
                     <input type="button" value="修改" data-id="${i.title}" class="update_data">
                  </td>
            </tr> 
                `).join("");
        }
   })
})