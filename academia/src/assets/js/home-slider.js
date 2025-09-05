/*Slider da home*/
var swiper = new Swiper(".home-slider", {
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	grabCursor: true,
	loop: true,
	spaceBetween: 20,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});