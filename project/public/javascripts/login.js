$('#yes').click(function(){
	$.ajax({
		type:"post",
        url:"/login",
        data:{"name":$("#use_name").val(),"password":$("#use_password").val()},
        success:function(data){
           if(data.status==1){
           window.location.href="/first_page"
	}else{
         alert("密码输入错误！！");
	    }
    }
  })
})

	//鼠标移开姓名框开始验证
	$("#use_name").blur(function(){
		var use_name = $("#use_name").val();
		//姓名验证
		var Username = /^[a-zA-Z\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
		if (!Username.test(use_name)) {
			$("#p_name").html("<font color=\"red\" size=\"2\">姓名格式填写错误！</font>");
		} else {
			$("#p_name").html("<font color=\"green\" size=\"2\">姓名格式正确！</font>");
		}
	})

	//鼠标放置姓名框不验证
	$("#use_name").focus(function(){
		$("#p_name").html("");
	  })

	//鼠标移开密码框开始验证
	$("#use_password").blur(function () {
		var password = $("#use_password").val();
		//密码验证
		var Password=/^(\w){6,20}$/;
		if (!Password.test(password)) {
			$("#p_password").html("<font color=\"red\" size=\"2\">密码格式填写错误！</font>");
		} else {
			$("#p_password").html("<font color=\"green\" size=\"2\">密码格式正确！</font>");
		}
	})

	//鼠标放置密码框不验证
	$("#use_password").focus(function(){
		$("#p_password").html("");
	  })

