import { Swiper, Navigation } from "swiper";
Swiper.use([Navigation]);
import * as $ from "jquery";


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


$(".open").click(function () {
	$(".product-slider__content.bar-list__aperitif").addClass("description-hide");
	$(".product-slider__cover").addClass("description-hide");
	$(".product-img__item.active").addClass("description-hide");
	$(".product-slider").addClass("menu-show");
	if (".description-hide") {
		$(".product-slider__aperitif-menu").removeClass("menu-hide");
	} else {
		$(".product-slider__aperitif-menu").addClass("menu-hide")
	}
});


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