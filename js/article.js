$(function(){
	var leftLi = $('.left>ul>li');
    leftLi.on('mouseover', function() {
        $(this).find('strong').addClass('width70');
        $(this).find('span').addClass('color');
    });
    leftLi.on('mouseout', function() {
        $(this).find('strong').removeClass('width70');
        // $(this).find('span').removeClass('color');
        // $(this).find('span').addClass('color1');
        if($(this).find('strong').hasClass('width100')){
        	return;
        }else{
        	$(this).find('span').removeClass('color');
        }
    });
    leftLi.on('click', function() {
        var self = $(this);
        var index = $(this).index();
        var tabBox = $('.tab-right').children('div');
        tabBox.eq(index).css('display','block').siblings().css('display','none');
        $('.left').find('li').removeClass('border');
        $('.left').find('strong').removeClass('width100');
        $('.left').find('i').removeClass('i-bg');
        $('.left').find('span').removeClass('color');
        $('.left').find('span').removeClass('color1');
        $(this).find('strong').addClass('width100');
        $(this).find('span').addClass('color');
        setTimeout(function() {
      		self.addClass('border');
            self.find('i').addClass('i-bg');
        }, 300);
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
})