//公告通知页面

//展示公告内容在页面
$.ajax({
    type:"GET",
    url:"/talk/discuss",
    success:function(data){
     $("#showNotice").empty();
     for( var i of data.list){
        $("#showNotice").append(`
        <li class="pic">
        <div class="img-box">
        <h3>${i.content}</h3>
         </div>
         <h2>${i.title}</h3>
 </li>
           `);
        }
     }
  })

//查询按钮
$("#sub_find").click(function(){
$.ajax({
  type:"POST",
  url:"/talk/find",
  data:{"data":$("#find").val()},
  success:function(data){
   $("#showNotice").empty();
   for( var i of data.list){
      $("#showNotice").append(`
      <li class="pic">
      <div class="img-box">
      <h3>${i.content}</h3>
       </div>
       <h2>${i.title}</h3>
</li>
          `)
      }
    }
  })
})