//师资队伍页面

$.ajax({
    type:"POST",
    url:"/teacher",
    success:function(data){
     $("#showTeachers").empty();
 document.getElementById("showTeachers").innerHTML = data.list.map(i =>`
       <li class="pic">
            	<div class="img-box">
                <img src="${i.teacher_image}">
                </div>
                <h3>${i.teacher_name}</h3>
        </li>
       `).join("");
    }
})

//查询按钮
$("#sub_find").click(function(){
    $.ajax({
      type:"POST",
      url:"/teacher/find",
      data:{"data":$("#find").val()},
      success:function(data){
       $("#showTeachers").empty();
       document.getElementById("showTeachers").innerHTML = data.list.map(i =>`
       <li class="pic">
            	<div class="img-box">
                <img src="${i.teacher_image}">
                </div>
                <h3>${i.teacher_name}</h3>
        </li>
              `).join("");
          }
    })
})
    
//分页
$(".tcdPageCode").createPage({
    pageCount:100,
    current:1,
    backFn:function(p){
        
    }
});