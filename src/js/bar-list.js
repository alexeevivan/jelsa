import "@styles/main.scss";
import "@styles/bar-list.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

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
// Swiper
// ==========================================================
const barListSlider = new swiper(".bar-list__container", {
	slidesPerView: "1",
	loop: true,
	speed: 2000,
	allowTouchMove: false,
	autoplay: {
		delay: 2000,
	},
	effect: "coverflow",
	grabCursor: false,
	centeredSlides: true,
	direction: "horizontal",
	pagination: {
		el: '.swiper-pagination',
	},
});
