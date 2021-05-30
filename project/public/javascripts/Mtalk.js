//校园论坛管理
$.ajax({
    type:"GET",
    url:"/talk/discuss",
    success:function(data){
     $("#Talk").empty();
     document.getElementById("Talk").innerHTML = data.list.map(i =>`
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
           `).join("");
  }
})
