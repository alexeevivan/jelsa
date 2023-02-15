// ==========================================================
// Swiper, GSAP & others libraries
// ==========================================================
import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination]);


// ==========================================================
// Swiper Slider
// ==========================================================

const swiper = new Swiper('.swiper-container', {
	modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	simulateTouch: false,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		type: 'bullets',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	autoplay: {
		// delay: 100,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
});