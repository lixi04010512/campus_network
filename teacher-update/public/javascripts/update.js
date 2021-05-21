//修改联系老师信息js
$.ajax({
    type:"GET",
    url:"/Mtouch/sub1",
    success:function(data){
       document.getElementById('update').innerHTML =data.data.map(i =>`
        <input type="text" id="name1" name="name1" value="${i.name}">
    </br>
        <input type="number" id="phone1" name="phone1" value="${i.phone}">
    </br>
        <input type="text" id="major1" name="major1" value="${i.major}">
    </br>
        <input type="number" id="teach_year1" name="teach_year1" value="${i.teach_year}">
    </br>
       `
       )}
})

    $('#sub').click(function(){
        $.ajax({
            type:"POST",
            url:"/Mtouch/sub",
            data:{"name1":$("#name1").val(),"phone1":$("#phone1").val(),"major1":$("#major1").val(),"teach_year1":$("#teach_year1").val()},
            success:function(data){
                console.log(data.data);
              if(data.data==1){
             window.location.href="/Mtouch"
              }
            }
        })
    })