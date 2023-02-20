// ==========================================================
// Swiper, GSAP & others libraries
// ==========================================================
import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
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

const mySwiper = new swiper(".swiper-container", {

	slidesPerView: "auto",
	loop: true,
	speed: 2000,
	allowTouchMove: false,
	autoplay: {
		delay: 2000,
	},
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
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

// ==========================================================
// BG animation while scrolling
// ==========================================================

(function () {
	$(window).scroll(function () {
		var Num = $(window).scrollTop() / 500;
		var Num2 = $(window).scrollTop() * .0015; // higher number for more zoom
		var Num2mod = Num2 + 1;
		var Num3 = $(window).scrollTop() * .1; // Title speed
		var Num3mod = Num3 + 1;
		return $('.shade').css('opacity', Num),
			$(".pl__text").css({ "transform": "scale(" + Num2mod + ")" }),
			$(".text").css({ "margin-top": "-" + Num3mod + "px" });
	});
}.call(this));