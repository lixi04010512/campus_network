//联系教师页面

$.ajax({
    type:"POST",
    url:"/touch",
    success:function(data){
     $("#showData").empty();
 document.getElementById("showData").innerHTML = data.list.map(i =>`
 <tr>
       <td>${i.name}</td>
       <td>${i.phone}</td>
       <td>${i.major}</td>
       <td>${i.teach_year}</td>
 </tr> 
       `).join("");
    }
})

//查询按钮
$("#sub_find").click(function(){
    $.ajax({
      type:"POST",
      url:"/touch/find",
      data:{"data":$("#find").val()},
      success:function(data){
       $("#showData").empty();
       for( var i of data.list){
          $("#showData").append(`
          <tr>
       <td>${i.name}</td>
       <td>${i.phone}</td>
       <td>${i.major}</td>
       <td>${i.teach_year}</td>
          </tr> 
              `)
          }
        }
    })
})