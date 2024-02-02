import "@styles/party.scss";
import "@styles/responsive/party-responsive.scss";
import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
import gsap from "./_vendors/gsap.min.js";
import MotionPathPlugin from "./_vendors/MotionPathPlugin.min.js";
import ScrollTrigger from "./_vendors/ScrollTrigger.min.js";
import ScrollSmoother from "./_vendors/ScrollSmoother.min.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);

const karaokeSlider = new swiper(".gallery-container", {

	slidesPerView: "1",
	loop: true,
	speed: 2000,
	allowTouchMove: false,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	grabCursor: false,
	centeredSlides: false,
});

const mobileKaraokeSlider = new swiper(".gallery-mobile-container", {

	slidesPerView: "1",
	loop: true,
	speed: 2000,
	allowTouchMove: true,
	// autoplay: {
	// 	delay: 5000,
	// },
	effect: "fade",
	grabCursor: false,
	centeredSlides: false,
});