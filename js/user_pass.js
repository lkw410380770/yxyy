
layui.use(['layer','form'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var $ = layui.jquery;
	$('.edit').click(function(){
		var values = $(this).val();
		$(this).parents('div.row').find('span').css('display','block');
		$(this).parents('div.row').find('span').css('background-color','#666');
		$(this).parents('div.row').find('i').removeClass('icon-X').addClass('icon-X');
		var pl = $(this).attr('placeholder');
		
		return false;
	})
	$('.btn').on('click',function(){
		$(this).parents('div.row').find('input.edit').val(' ');
	})
	$('.row').on('blur','input.edit',function(){
		var self = $(this);
		var pl = $(this).attr('placeholder');
		if(self.val() != '' && self.val() != pl){
			$(this).parents('div.row').find('span').css('background-color','#6dca6e');
			$(this).parents('div.row').find('i').removeClass('icon-X').addClass('icon-ok');
		}else{			
			$(this).parents('div.row').find('span').css('display','none');
			$(this).val(pl);
		}
		return false;
	})
})