//
$.ajax({
    type:"GET",
    url:"/talk/discuss",
    success:function(data){
     $("#talk1").empty();
     for( var i of data.list){
        $("#talk1").append(`
     <tr>
           <td>${i.name}</td>
           <td>${i.title}</td>
           <td>${i.content}</td>
           <td>${i.comment}</td>
           <td>${i.like}</td>
           <td>
              <input type="button" value="删除" data-id="${i.title}" class="del_data">
              <input type="button" value="修改" data-id="${i.title}" class="update_data">
           </td>
     </tr> 
           `);
  }
}
})

$("#out").click(function(){
    $.ajax({
		type:"POST",
        url:"/talk/out",
        success:function(data){
            if(data.status ==1){
           window.location.href="/add_content";
            }
     }
   })
})