//密码可见或者不可见
$("#passShow").click(function() {
	if($("#password").attr("type") == "password") {
		$("#password").attr("type", "text");
		$("#passShow").removeClass("icon-chakanmima");
		$("#passShow").addClass("icon-mimachakan");
	} else {
		$("#password").attr("type", "password");
		$("#passShow").addClass("icon-chakanmima");
		$("#passShow").removeClass("icon-mimachakan");
	}
})
//验证码验证
$("#codeBtn").click(function() {
	var time = 60;
	var timer = setInterval(function() {
		time--;
		$('#codeBtn').attr('disabled', "true");
		$("#codeBtn").html(time + "s后重新发送");
		if(time <= 1) {
		$('#codeBtn').removeAttr("disabled");
			$("#codeBtn").html("短信获取验证码");
			clearTimeout(timer);
		}
	}, 1000);
})
//注册手机手机号验证
$("#register").click(function(){
	if(!$("#tel").val()){
		alert("请输入手机号")
	}else if(!(/^1[34578]\d{9}$/.test($("#tel").val()))){
		alert("请输入正确的手机号");
	}
})






