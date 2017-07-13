//登录
$(".LOGINBTN").click(function() {
	layer.open({
		type: 2,
		area: ['420px', '450px'],
		fixed: false, //不固定
		maxmin: true,
		content: 'login.html'
	});
	//	$("#login").css("display", "block");
	//	$("#register").css("display", "none")
});
$("#closeLogin").click(function() {
	$("#login").css("display", "none");
})
$(".loginCloseUser").click(function() {
	$(".loginCloseUserText").val(" ");
})
//注册
$(".REGISTERBTN").click(function() {
	layer.open({
		type: 2,
		area: ['420px', '600px'],
		fixed: false, //不固定
		maxmin: true,
		content: 'register.html'
	});
});
$("#closeRegister").click(function() {
	$("#register").css("display", "none");
})
$(".registerCloseUser").click(function() {
	$(".registerCloseUserText").val(" ");
})
$(".showPass").click(function() {
	if($(".passInput").attr("type") == "password") {
		$(".passInput").attr("type", "text");
		$(".showPass").removeClass("icon-chakanmima");
		$(".showPass").addClass("icon-mimachakan");
	} else {
		$(".passInput").attr("type", "password");
		$(".showPass").addClass("icon-chakanmima");
		$(".showPass").removeClass("icon-mimachakan");
	}
});
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