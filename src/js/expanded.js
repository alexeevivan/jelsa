// ==========================================================
// Swiper, GSAP & others libraries
// ==========================================================
import * as $ from "jquery";
import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
Swiper.use([Navigation, Pagination]);
import gsap from "./gsap.min.js";
import ScrollTrigger from "./ScrollTrigger.min.js";
import ScrollSmoother from "./ScrollSmoother.min.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if (ScrollSmoother.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: ".wrapper",
		content: ".content",
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo(".hero-section", { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: ".hero-section",
			start: "center",
			end: "820",
			scrub: true
		}
	})
}


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


// ==========================================================
// Header animation
// ==========================================================
$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 200) {
			$(".header").addClass("active");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
			$(".header").removeClass("active");
		}
	});
});