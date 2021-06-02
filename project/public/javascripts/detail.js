//招生简章页面

$.ajax({
    type:"POST",
    url:"/detail/search",
    success:function(data){
     $("#showData").empty();
 document.getElementById("showData").innerHTML = data.list.map(i =>`
 <tr>
       <td>${i.title}</td>
       <td>${i.detail}</td>
 </tr> 
       `).join("");
    }
})

//查询按钮
$("#sub_find").click(function(){
    $.ajax({
      type:"POST",
      url:"/detail/find",
      data:{"data":$("#find").val()},
      success:function(data){
       $("#showData").empty();
       for( var i of data.list){
          $("#showData").append(`
          <tr>
          <td>${i.title}</td>
          <td>${i.detail}</td>
    </tr> 
              `)
          }
       }
   })
})