var swiper1 = new Swiper('.banner', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	loop: true,
	autoplay: 2500,
	paginationClickable: true
});
bodyWidth();
window.onresize = function() {
	bodyWidth();
}
function bodyWidth() {
	if(document.body.clientWidth >= 1200) {
		var swiper2 = new Swiper('.yyss', {
			pagination: '.yyss .swiper-pagination',
			slidesPerView: 5,
			loop: true,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 20
		});
	} else if(document.body.clientWidth <= 500) {
		var swiper2 = new Swiper('.yyss', {
			pagination: '.yyss .swiper-pagination',
			slidesPerView: 1,
			loop: true,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 20
		});
	} else {
		var swiper2 = new Swiper('.yyss', {
			pagination: '.yyss .swiper-pagination',
			slidesPerView: 3,
			loop: true,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 20
		});
	}
}
