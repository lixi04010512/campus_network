$('#yes').click(function(){
	$.ajax({
		type:"post",
        url:"/login",
        data:{"name":$("#use_name").val(),"password":$("#use_password").val()},
        success:function(data){
           if(data.status==1){
           window.location.href="/first_page"
	}else{
         alert("错误！！");
	}
  }
})
	})