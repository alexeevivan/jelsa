// ==========================================================
// Swiper, GSAP & others libraries
// ==========================================================

import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
import gsap from "./_vendors/gsap.min.js";
import MotionPathPlugin from "./_vendors/MotionPathPlugin.min.js";
import ScrollTrigger from "./_vendors/ScrollTrigger.min.js";
import ScrollSmoother from "./_vendors/ScrollSmoother.min.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MotionPathPlugin);


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

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
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

const mobileKaraokeSlider = new swiper(".mp-gallery__container", {

	slidesPerView: "1",
	loop: true,
	speed: 2000,
	allowTouchMove: true,
	autoplay: {
		delay: 500,
	},
	effect: "coverflow",
	grabCursor: false,
	centeredSlides: true,
});


// ==========================================================
// Cocktails list animations
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
const mpcallsign = document.querySelector("#mp-gallery__callsign");
let delay = 2500;
let animateInDuration = 500;
let animateOutDuration = 500;

function replaceText(i) {
	setTimeout(function () {
		callsign.innerText = textArray[i];
		mpcallsign.innerText = textArray[i];
		console.log(textArray[i]);
	}, delay * i)
};

function animateIn(i) {
	setTimeout(function () {
		callsign.className = "js-animate-in";
		mpcallsign.className = "js-animate-in";
	}, delay * i);
	if (i != 0) {
		setTimeout(function () {
			callsign.className = "";
			mpcallsign.className = "";
		}, delay * i - (delay - animateInDuration));
	}
};

function animateOut(i) {
	setTimeout(function () {
		callsign.className = "js-animate-out";
		mpcallsign.className = "js-animate-out";
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
// Reveal
// ==========================================================

function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 10;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", () => {
	document.body.style.setProperty("--scroll", window.pageYOffset - window.innerHeight);
},
	false
);


// ==========================================================
// Booking via Telegram Chat-Bot
// ==========================================================
