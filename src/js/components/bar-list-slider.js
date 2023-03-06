import { Swiper, Navigation } from "swiper";
Swiper.use([Navigation]);
import * as $ from "jquery";

// ==========================================================
// Swiper
// ==========================================================
const swiper = new Swiper(".product-slider", {
	direction: "vertical",
	spaceBetween: 30,
	effect: "fade",
	loop: false,
	speed: 1000,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev"
	},
	on: {
		init: function () {
			let index = this.activeIndex;
			let target = $(".product-slider__item").eq(index).data("target");

			console.log(target);

			$(".product-img__item").removeClass("active");
			$(".product-img__item#" + target).addClass("active");
		}
	}

});

swiper.on("slideChange", function () {
	let index = this.activeIndex;

	let target = $(".product-slider__item").eq(index).data("target");

	console.log(target);

	$(".product-img__item").removeClass("active");
	$(".product-img__item#" + target).addClass("active");

	if (swiper.isEnd) {
		$(".prev").removeClass("disabled");
		$(".next").addClass("disabled");
	} else {
		$(".next").removeClass("disabled");
	}

	if (swiper.isBeginning) {
		$(".prev").addClass("disabled");
	} else {
		$(".prev").removeClass("disabled");
	}
});


// ==========================================================
// Hidden menu-list opening
// ==========================================================

// working

// $(".product__menu-btn.open-btn").click(function () {
// 	$(".product__menu-btn.open-btn").removeClass("open-btn");
// 	$(".product__menu-btn").addClass("close-btn");
// 	$(".product-slider__content.bar-list__aperitif").addClass("description-hide");
// 	$(".product-slider__cover").addClass("description-hide");
// 	$(".product-img__item.active").addClass("description-hide");
// 	$(".product-slider").addClass("menu-show");
// 	if (".description-hide") {
// 		$(".product-slider__aperitif-menu").removeClass("menu-hide");
// 	} else {
// 		$(".product-slider__aperitif-menu").addClass("menu-hide")
// 	};
// 	if ("product__menu-btn.close-btn") {
// 		$(".product__menu-btn.close-btn").click(function () {
// 			$(".product__menu-btn.close-btn").removeClass("close-btn");
// 			$(".product__menu-btn").addClass("open-btn");
// 			$(".product-slider__content.bar-list__aperitif").removeClass("description-hide");
// 			$(".product-slider__cover").removeClass("description-hide");
// 			$(".product-img__item.active").removeClass("description-hide");
// 			$(".product-slider").removeClass("menu-show");
// 			$(".product-slider__aperitif-menu").addClass("menu-hide");
// 		});
// 	};
// });

const openBtn = document.getElementById("open-bar-list");
console.log(openBtn);

openBtn.onclick = function () {
	$(".product__menu-btn.open-btn").click(function () {
		$(".product__menu-btn.open-btn").removeClass("open-btn");
		$(".product__menu-btn").addClass("close-btn");
		$(".product-slider__content.bar-list__aperitif").addClass("description-hide");
		$(".product-slider__cover").addClass("description-hide");
		$(".product-img__item.active").addClass("description-hide");
		$(".product-slider").addClass("menu-show");
		if (".description-hide") {
			$(".product-slider__aperitif-menu").removeClass("menu-hide");
		} else {
			$(".product-slider__aperitif-menu").addClass("menu-hide")
		};
		if ("product__menu-btn.close-btn") {
			$(".product__menu-btn.close-btn").click(function () {
				$(".product__menu-btn.close-btn").removeClass("close-btn");
				$(".product__menu-btn").addClass("open-btn");
				$(".product-slider__content.bar-list__aperitif").removeClass("description-hide");
				$(".product-slider__cover").removeClass("description-hide");
				$(".product-img__item.active").removeClass("description-hide");
				$(".product-slider").removeClass("menu-show");
				$(".product-slider__aperitif-menu").addClass("menu-hide");
			});
		};
	});
};


// ==========================================================
// Menu-list open btn animation
// ==========================================================
let animateButton = function (e) {

	e.preventDefault;
	//reset animation
	e.target.classList.remove("animate");

	e.target.classList.add("animate");
	setTimeout(function () {
		e.target.classList.remove("animate");
	}, 700);
};

let bubblyButtons = document.getElementsByClassName("product__menu-btn");

for (let i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener("click", animateButton, false);
}


// ==========================================================
// Menu-list open btn animation
// ==========================================================

const openModalBtn = document.querySelectorAll(".trigger[data-modal-trigger]");

for (let button of openModalBtn) {
	modalEvent(button);
};

function modalEvent(button) {
	button.addEventListener("click", () => {
		const trigger = button.getAttribute("data-modal-trigger");
		console.log("trigger", trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		console.log("modal", modal)
		const componentWrapper = modal.querySelector(".component-wrapper");
		const close = modal.querySelector(".close");

		close.addEventListener("click", () => modal.classList.remove("modal-show"));
		modal.addEventListener("click", () => modal.classList.remove("modal-show"));
		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

		modal.classList.toggle("modal-show");
	});
};
