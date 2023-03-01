import * as $ from "jquery";
import "@styles/main.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
import "@styles/_vendor.scss";


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