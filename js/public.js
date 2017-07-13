//导航点击
$(".clickEle").click(function() {
    $(".slide-nav").css("right", "0");
    $(".mask").css("display", "block");
    $(".mask").css("opacity", "1");
})
$(".mask").click(function() {
    $(".slide-nav").css("right", "-26%");
    $(".mask").css("display", "none");
    $(".mask").css("opacity", "0");
})
hideSearch();
//搜索点击
hideSearch();
$("#searchBtn").click(function() {
    $(".searchWrap").slideDown(500);
});
//关闭点击框
$("#closeBtn").click(function() {
    $(".searchWrap").slideUp(500);
});
$(window).resize(function() {
    hideSearch();
});
layui.use(['layer','form'],function(){
    var layer = layui.layer;
    var form = layui.form();
    $(".LOGINBTN").click(function() {
    layer.open({
        type: 2,
        area: ['380px', '332px'],
        fixed: false, //不固定
        maxmin: false,
        title:false,
        shadeClose:true,
        closeBtn:true,
        content: 'login.html'
    });
});
    $(".REGISTERBTN").click(function() {
    layer.open({
        type: 2,
        area: ['380px', '472px'],
        fixed: false, //不固定
        maxmin: false,
         title:false,
        shadeClose:true,
        closeBtn:true,
        content: 'register.html'
    });
});
})

function hideSearch() {
    if ($(window).width() <= 761) {
        $(".searchWrap").slideDown(500);
    } else {
        $(".searchWrap").slideUp(500);
    }
}


$("#closeLogin").click(function() {
    $("#login").css("display", "none");
})
$(".loginCloseUser").click(function() {
        $(".loginCloseUserText").val(" ");
    })
    
