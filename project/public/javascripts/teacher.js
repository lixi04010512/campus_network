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
       `);
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
       for( var i of data.list){
          $("#showTeachers").append(`
          <li class="pic">
          <div class="img-box">
          <img src="${i.teacher_image}">
          </div>
          <h3>${i.teacher_name}</h3>
         </li>
              `)
          }
       }
    })
})
    
//分页
$(".tcdPageCode").createPage({
    pageCount:100,
    current:1,
    backFn:function(p){
        //console.log(p);
    }
});