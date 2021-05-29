//修改招生简章js
$.ajax({
    type:"GET",
    url:"/Mdetail/sub1",
    success:function(data){
       document.getElementById('update').innerHTML =data.data.map(i =>`
        <span>条例:</span>
        <input type="text" id="title1" name="title1" value="${i.title}">
    </br>
        <span>准则:</span>
        <input type="text" id="detail1" name="detail1" value="${i.detail}">
    </br>
       `
       )}
})

    $('#sub').click(function(){
        $.ajax({
            type:"POST",
            url:"/Mdetail/sub",
            data:{"title1":$("#title1").val(),"detail1":$("#detail1").val()},
            success:function(data){
                console.log(data.data);
              if(data.data==1){
             window.location.href="/Mdetail"
              }
            }
        })
    })