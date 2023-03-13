import { Swiper, Navigation } from "swiper";
Swiper.use([Navigation]);
import * as $ from "jquery";
import gsap from "gsap/dist/gsap";

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
const openBtn = document.getElementById("open-bar-list");
const opentBtnSpirits = document.getElementById("open-spirits-list");

openBtn.onclick = function () {
	$(".product__menu-btn.open-btn").click(function () {
		$(".product__menu-btn.open-btn").removeClass("open-btn");
		$(".product__menu-btn").addClass("close-btn");
		$(".product-slider__content.bar-list__aperitif").addClass("description-hide");
		$(".product-slider__cover").addClass("description-hide");
		$(".product-img__item.active").addClass("description-hide");
		gsap.fromTo(".product-slider", { width: "75%" }, { duration: .5, ease: "back.out(1.4)", width: "92%" });

		if (".description-hide") {
			$(".product-slider__aperitif-menu").removeClass("menu-hide");
		} else {
			$(".product-slider__aperitif-menu").addClass("menu-hide");
		};
		if ("product__menu-btn.close-btn") {
			$(".product__menu-btn.close-btn").click(function () {
				$(".product__menu-btn.close-btn").removeClass("close-btn");
				$(".product__menu-btn").addClass("open-btn");
				$(".product-slider__content.bar-list__aperitif").removeClass("description-hide");
				$(".product-slider__cover").removeClass("description-hide");
				$(".product-img__item.active").removeClass("description-hide");
				gsap.fromTo(".product-slider", { width: "92%" }, { duration: .5, ease: "back.out(1.4)", width: "75%" });
				$(".product-slider__aperitif-menu").addClass("menu-hide");
			});
		};
	});
};

opentBtnSpirits.onclick = function () {
	$(".product__spirits-btn.open-btn").click(function () {
		$(".product__spirits-btn.open-btn").removeClass("open-btn");
		$(".product__spirits-btn").addClass("close-btn");
		$(".product-slider__content.bar-list__spirits").addClass("description-hide");
		$(".product-slider__cover").addClass("description-hide");
		$(".product-img__item.active").addClass("description-hide");
		gsap.fromTo(".product-slider", { width: "75%" }, { duration: .5, ease: "back.out(1.4)", width: "92%" });

		if (".description-hide") {
			$(".product-slider__spirits-menu").removeClass("menu-hide");
		} else {
			$(".product-slider__spirits-menu").addClass("menu-hide")
		};
		if ("product__spirits-btn.close-btn") {
			$(".product__spirits-btn.close-btn").click(function () {
				$(".product__spirits-btn.close-btn").removeClass("close-btn");
				$(".product__spirits-btn").addClass("open-btn");
				$(".product-slider__content.bar-list__spirits").removeClass("description-hide");
				$(".product-slider__cover").removeClass("description-hide");
				$(".product-img__item.active").removeClass("description-hide");
				gsap.fromTo(".product-slider", { width: "92%" }, { duration: .5, ease: "back.out(1.4)", width: "75%" });
				$(".product-slider__spirits-menu").addClass("menu-hide");
			});
		};
	});
};

if (".aperitif-menu.swiper-slide-active") {
	$(".next").on("click", function () {
		$(".product-slider__aperitif-menu").addClass("hidden");
	});
};
if (".aperitif-menu.swiper-slide-prev") {
	$(".prev").on("click", function () {
		$(".product-slider__aperitif-menu").removeClass("hidden");
	});
};
if (".spirits-menu.swiper-slide-active") {
	$(".prev").on("click", function () {
		$(".product-slider__spirits-menu").addClass("hidden");
	});
};
if (".spirits-menu.swiper-slide-next") {
	$(".next").on("click", function () {
		$(".product-slider__spirits-menu").removeClass("hidden");
	});
};
// ==========================================================
// Menu-list open btn animation
// ==========================================================
let animateButton = function (e) {

	e.preventDefault;
	//reset animation
	e.target.classList.remove("animate-btn");

	e.target.classList.add("animate-btn");
	setTimeout(function () {
		e.target.classList.remove("animate-btn");
	}, 700);
};

let aperitifButtons = document.getElementsByClassName("product__menu-btn");
let spiritsButtons = document.getElementsByClassName("product__spirits-btn");

for (let i = 0; i < aperitifButtons.length; i++) {
	aperitifButtons[i].addEventListener("click", animateButton, false);
}

for (let i = 0; i < spiritsButtons.length; i++) {
	spiritsButtons[i].addEventListener("click", animateButton, false);
}


// ==========================================================
// Menu-list opening
// ==========================================================
const openModalBtn = document.querySelectorAll(".trigger[data-modal-trigger]");
const openModalBtnSpirits = document.querySelectorAll(".trigger-spirits[data-modal-trigger]");

for (let button of openModalBtn) {
	modalEvent(button);
};

for (let buttonSpirits of openModalBtnSpirits) {
	modalEventSpirits(buttonSpirits);
};

function modalEvent(button) {
	button.addEventListener("click", () => {
		const trigger = button.getAttribute("data-modal-trigger");
		console.log("trigger", trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		console.log("modal-aperitif", modal)
		const componentWrapper = modal.querySelector(".component-wrapper");
		const close = modal.querySelector(".close");

		close.addEventListener("click", () => modal.classList.remove("modal-show"));
		modal.addEventListener("click", () => modal.classList.remove("modal-show"));
		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

		modal.classList.toggle("modal-show");
	});
};

function modalEventSpirits(buttonSpirits) {
	buttonSpirits.addEventListener("click", () => {
		const triggerSpirits = buttonSpirits.getAttribute("data-modal-trigger");
		console.log("trigger-spirits", triggerSpirits)
		const modalSpirits = document.querySelector(`[data-modal=${triggerSpirits}]`);
		console.log("modal-spirits", modalSpirits)
		const componentWrapperSpirits = modalSpirits.querySelector(".component-wrapper-spirits");
		const closeSpirits = modalSpirits.querySelector(".close");

		closeSpirits.addEventListener("click", () => modalSpirits.classList.remove("modal-show"));
		modalSpirits.addEventListener("click", () => modalSpirits.classList.remove("modal-show"));
		componentWrapperSpirits.addEventListener("click", (e) => e.stopPropagation());

		modalSpirits.classList.toggle("modal-show");
	});
};

// ==========================================================
// Button inner text changing
// ==========================================================
const menuShowBtnAperitif = document.getElementById("open-bar-list");
const menuShowBtnSpirit = document.getElementById("open-spirits-list");
let count = 0;
let i = 0;

menuShowBtnAperitif.addEventListener("click", () => {

	i = i + 1;

	if (i % 2 == 0) {
		menuShowBtnAperitif.innerText = "назад";
	} else {
		menuShowBtnAperitif.innerText = "меню"
	}
});

menuShowBtnSpirit.addEventListener("click", () => {

	count = count + 1;

	if (count % 2 == 0) {
		menuShowBtnSpirit.innerText = "назад";
	} else {
		menuShowBtnSpirit.innerText = "меню"
	}
});