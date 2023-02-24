// ==========================================================
// Swiper, GSAP & others libraries
// ==========================================================

import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
import gsap from "./_vendors/gsap.min.js";
import ScrollTrigger from "./_vendors/ScrollTrigger.min.js";
import ScrollSmoother from "./_vendors/ScrollSmoother.min.js";
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

const karaokeSlider = new swiper(".gallery-container", {

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


// ==========================================================
// Cocktails list animation
// ==========================================================

const textArray = [
	"sidecar",
	"mai-tai",
	"aviation",
	"appletini",
	"papa doble",
	"aperol spritz",
	"the boulevardier",
	"corpse reviver #2",
	"porn star martini",
	"perfect martini",
	"old fashioned",
	"whiskey sour",
	"penicillin",
	"manhattan",
	"bramble",
];

const callsign = document.querySelector("#callsign");
let delay = 2500;
let animateInDuration = 500;
let animateOutDuration = 500;

function replaceText(i) {
	setTimeout(function () {
		callsign.innerText = textArray[i];
		console.log(textArray[i]);
	}, delay * i)
};

function animateIn(i) {
	setTimeout(function () {
		callsign.className = "js-animate-in";
	}, delay * i);
	if (i != 0) {
		setTimeout(function () {
			callsign.className = "";
		}, delay * i - (delay - animateInDuration));
	}
};

function animateOut(i) {
	setTimeout(function () {
		callsign.className = "js-animate-out";
	}, delay * i + (delay - animateOutDuration))
};


function animate(i) {
	for (i = 0; i < textArray.length; i++) {
		replaceText(i);
		animateIn(i);
		animateOut(i);
	}
}

animate();
setInterval(animate, delay * textArray.length);

// ==========================================================
// 360 deg panorama
// ==========================================================
let container = document.querySelector('#hall__panoramic');
let panorama = new PANOLENS.ImagePanorama("https://i.imgur.com/wTCPouq.jpg");
let viewer = new PANOLENS.Viewer({
	container: container
});

viewer.add(panorama);