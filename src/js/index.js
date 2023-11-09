import * as $ from "jquery";
import anime from "./_vendors/anime.min.js";
import "@styles/main.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
import "@styles/_vendor.scss";
import "@styles/responsive/_header-responsive.scss";
import "@styles/responsive/main-responsive.scss";


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
		return $(".shade").css("opacity", Num),
			$(".pl__text").css({ "transform": "scale(" + Num2mod + ")" }),
			$(".text").css({ "margin-top": "-" + Num3mod + "px" });
	});
}.call(this));

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

$(".toggle-menu").click(function () {
	$(this).toggleClass("active");
	$("#menu").toggleClass("open");
});

// ==========================================================
// Lazy loading
// ==========================================================
(async () => {
	if ("loading" in HTMLImageElement.prototype) {
		const images = document.querySelectorAll("img.lazyload");
		images.forEach(img => {
			img.src = img.dataset.src;
		});
	} else {
		// Динамически импортируем библиотеку LazySizes
		const lazySizesLib = await import("./_vendors/lazysizes.min.js");
		// Инициализируем LazySizes (читаем data-src & class=lazyload)
		lazySizes.init(); // lazySizes применяется при обработке изображений, находящихся на странице.
	}
})();

// ==========================================================
// Index page new-year modal animation
// ==========================================================
window.onload = function () {
	$(".modal-ny").addClass("modal-ny__active");
	$(".header").addClass("hidden");
	document.body.style.position = "fixed";
};

$(".modal-ny__close-btn").click(function () {
	$(".modal-ny").removeClass("modal-ny__active");
	$(".modal-ny").addClass("hidden");
	document.body.style.position = "unset";
});

var design = anime({
	targets: "#newyear2020 #happy",
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: "easeInOutSine",
	duration: 2500,
	delay: function (el, i) { return i * 250 },
	direction: "alternate",
	loop: true
});

var design = anime({
	targets: "#newyear2020 #NEWYEAR",
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: "easeInOutSine",
	duration: 2500,
	delay: function (el, i) { return i * 250 },
	direction: "alternate",
	loop: true
});

var design = anime({
	targets: "#newyear2020 #Vector_43,#Vector_210,#Vector_207,#Vector_42,#Vector_45",
	strokeDashoffset: [anime.setDashoffset, 0],
	translateY: -10,
	easing: "easeInOutSine",
	duration: 250,
	delay: function (el, i) { return i * 250 },
	direction: "alternate",
	loop: true
});