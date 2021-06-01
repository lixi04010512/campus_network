//招生简章管理
function load(){
    $.ajax({
        type:"GET",
          url:"/Mdetail/details",
          success:function(data){
           $("#Detail").empty();
           for( var i of data.listDetail){
           $("#Detail").append(`
           <tr>
                 <td>${i.title}</td>
                 <td>${i.detail}</td>
                 <td>
                    <input type="button" value="删除" data-id="${i.title}" class="del_data">
                    <input type="button" value="修改" data-id="${i.title}" class="update_data">
                 </td>
           </tr> 
                 `)
           }
         }
     })
    }
    load();
    
    $('#detailAdd').click(function(){
      $.ajax({
          type:"POST",
          url:"/Mdetail",
          data:{"title":$("#title").val(),"detail":$("#detail").val()},
          success:function(data){
              if(data.add ==1){
                load();
                $("#title").val("");
                $("#detail").val("");
              }
      }
    })
    })
    
    $("#Detail").delegate(".del_data","click",function(){
     $.ajax({
          type:"POST",
          url:"/Mdetail/del",
          data:{"title":$(this).data("id")},
          success:function(data){
            if(data.del ==1){
              load();
            }
      }
    })
    })
    
    $("#Detail").delegate(".update_data","click",function(){
     $.ajax({
          type:"POST",
          url:"/Mdetail/update",
          data:{"title":$(this).data("id")},
          success:function(data){
            console.log($(this).data("id"));
              if(data.data==1){
                  window.location.href="/update_detail";
              }
      }
    })
    })

    
$("#sub_find").click(function(){
  $.ajax({
    type:"POST",
    url:"/Mdetail/find",
    data:{"data":$("#find").val()},
    success:function(data){
      $("#Detail").empty();
      for( var i of data.list){
      $("#Detail").append(`
      <tr>
            <td>${i.title}</td>
            <td>${i.detail}</td>
            <td>
               <input type="button" value="删除" data-id="${i.title}" class="del_data">
               <input type="button" value="修改" data-id="${i.title}" class="update_data">
            </td>
      </tr> 
            `)
      }
    }
  })
})