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
        <img src="/images/like.jpg" style="height:50px;width:50px" name="like" data-id="${i.title}" class="like">
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

//点赞按钮
var index =0;
$("#showNotice").delegate(".like","click",function(){
  index++;
  if(index%2 ==0){
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
  }else{
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
       }
   })

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
            <img src="/images/like.jpg" style="height:50px;width:50px" name="dislike" data-id="${i.title}" class="like">
             </div>
            <h2>${i.title}</h2>
            <h2>点赞数：${i.love}</h2>
            </li>
               `)
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
      <img src="/images/like.jpg" style="height:50px;width:50px" name="like" data-id="${i.title}" class="like">
      </div>
      <h2>${i.title}</h2>
      <h2>点赞数：${i.love}</h2>
      </li>
          `)
        }
     }
   })
})