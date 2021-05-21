//通告管理
function show(){
    $.ajax({
       type:"GET",
         url:"/Mnotice/show",
         success:function(data){
          $("#Notice").empty();
          document.getElementById("Notice").innerHTML = data.list.map(i =>`
          <tr>
                <td>${i.notice}</td>
                <td>${i.content}</td>
                <td>
                      <input type="button" value="删除" data-id="${i.notice}" class="del_data">
                      <input type="button" value="修改" data-id="${i.notice}" class="update_data">
                   </td>
          </tr> 
                `).join("");
    }
    })
    }
    show();
    
    $('#noticeAdd').click(function(){
        $.ajax({
            type:"POST",
            url:"/Mnotice",
            data:{"notice":$("#notice").val(),"content":$("#content").val()},
            success:function(data){
               show();
        }
      })
    })
    
    $("#Notice").delegate(".del_data","click",function(){
       $.ajax({
            type:"POST",
            url:"/Mnotice/del",
            data:{"notice":$(this).data("id")},
            success:function(data){
               show();
        }
      })
    })
    