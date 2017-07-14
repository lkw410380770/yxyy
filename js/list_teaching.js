$(function() {
    var leftLi = $('.left>ul>li');
    leftLi.on('mouseover', function() {
        $(this).addClass('hoverS');
    });
   leftLi.on('mouseout', function() {
        $(this).removeClass('hoverS');
    });
    leftLi.on('click', function() {
        leftLi.removeClass('hoverS');
        leftLi.removeClass('clickS');
        $(this).removeClass('hoverS').addClass('clickS');
    });
    var pageA = $('.page');
    var pageAa = $('.page').find('a');
    pageA.on('click','a',function(){
    	var classEle = $(this).attr('class');
    	if(classEle != 'prev' || classEle != 'next'){
    		for(var i=1;i<pageAa.length-1;i++){
    			pageAa[i].className = "";
    		}
    		$(this).addClass('current');
    	}
    })
    //判断是否有背景图给
    var allpic = $('.right-bottom>ul>li').find('div.pic');
    $.each(allpic, function(i, v) {
        var bg = $(v).attr('style');
        var imgstr = bg.substring((bg.indexOf('\'') + 1), bg.lastIndexOf('\''));
        var img = new Image();
        img.src = imgstr;
        if (img.width == 0) {
            $(v).addClass('width32 height50');
            $(v).children('i').css('display', 'block');
            $(v).next().next().addClass('width90');

        } else {
            $(v).addClass('width110');
            $(v).children('i').css('display', 'none');
            $(v).next().css('margin-top', 14);
        }
    });
})
