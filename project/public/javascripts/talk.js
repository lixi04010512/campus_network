//公告通知页面

//展示公告内容在页面
function load(){
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
        <input type="button" name="like" data-id="${i.title}" class="like" value="点赞">
         </div>
        <h2>${i.title}</h2>
        <h2>点赞数：${i.love}</h2>
        </li>
           `);
        }
     }
  })
}
  load();

//取消点赞方法
  function load_dis(){
    $.ajax({
        type:"GET",
        url:"/talk/load_dis",
        success:function(data){
         $("#showNotice").empty();
         for( var i of data.list){
            $("#showNotice").append(`
            <li class="pic">
            <div class="img-box">
            <h3>${i.content}</h3>
            <input type="button" name="dislike" data-id="${i.title}" class="dislike" value="取消点赞">
             </div>
            <h2>${i.title}</h2>
            <h2>点赞数：${i.love}</h2>
            </li>
               `);
            }
         }
      })
    }

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
      <input type="button" name="like" data-id="${i.title}" class="like" value="点赞">
      </div>
      <h2>${i.title}</h2>
      <h2>点赞数：${i.love}</h2>
      </li>
          `)
      }
    }
  })
})


//点赞按钮
$("#showNotice").delegate(".like","click",function(){
  $.ajax({
    type:"POST",
    url:"/talk/like",
    data:{"title":$(this).data("id")},
    success:function(data){
      if(data.status==1){
            load_dis();
        }
      }
  })
})

//取消点赞按钮
$("#showNotice").delegate(".dislike","click",function(){
  $.ajax({
    type:"POST",
    url:"/talk/dislike",
    data:{"title":$(this).data("id")},
    success:function(data){
      if(data.status==1){
       load();
      }
    }
  })
})