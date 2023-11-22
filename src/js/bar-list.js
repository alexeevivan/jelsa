import "@styles/main.scss";
import "@styles/bar-list.scss";
import "@styles/_bar-list-slider.scss";
import "@styles/_bar-list-modal.scss";
import "@styles/responsive/_header-responsive.scss";
import "@styles/responsive/_bar-list-slider-responsive.scss";
import "@styles/responsive/_bar-list-modal-responsive.scss";
import "@styles/responsive/_footer-responsive.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
import * as $ from "jquery";

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
// Cocktails list animation
// ==========================================================

const textArray = [
	"glera",
	"merlot",
	"chardonnay",
	"pinot noir",
	"pinot meunier",
	"gewürztraminer",
	"sauvignon blanc",
	"cabernet sauvignon",
];

const textArraySpirits = [
	"Patrón",
	"Louis XIII",
	"Grey Goose",
	"The Macallan",
	"Zacapa Centenario",
];

const callsign = document.querySelector("#callsign");
const callsignSpirits = document.querySelector("#callsign-spirits");
let delay = 2500;
let animateInDuration = 500;
let animateOutDuration = 500;

function replaceText(i) {
	setTimeout(function () {
		callsign.innerText = textArray[i];
		console.log(textArray[i]);
	}, delay * i)
};

function replaceTextSpirits(i) {
	setTimeout(function () {
		callsignSpirits.innerText = textArraySpirits[i];
		console.log(textArraySpirits[i]);
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

function animateInSpirits(i) {
	setTimeout(function () {
		callsignSpirits.className = "js-animate-in";
	}, delay * i);
	if (i != 0) {
		setTimeout(function () {
			callsignSpirits.className = "";
		}, delay * i - (delay - animateInDuration));
	}
};

function animateOut(i) {
	setTimeout(function () {
		callsign.className = "js-animate-out";
	}, delay * i + (delay - animateOutDuration))
};

function animateOutSpirits(i) {
	setTimeout(function () {
		callsignSpirits.className = "js-animate-out";
	}, delay * i + (delay - animateOutDuration))
};


function animate(i) {
	for (i = 0; i < textArray.length; i++) {
		replaceText(i);
		animateIn(i);
		animateOut(i);
	}
}

function animateSpirits(i) {
	for (i = 0; i < textArraySpirits.length; i++) {
		replaceTextSpirits(i);
		animateInSpirits(i);
		animateOutSpirits(i);
	}
}

animate();
setInterval(animate, delay * textArray.length);
setInterval(animateSpirits, delay * textArraySpirits.length);

// ==========================================================
// Spirit Slide Title animation (mobile-view only)
// ==========================================================

let typed = "";
const element = document.querySelector(".spirit");

function startType(pun, index) {
	if (index < pun.length) {
		typed += pun.charAt(index);
		element.innerHTML = typed;
		index++;
		setTimeout(function () {
			startType(pun, index);
		}, 100);
	} else {
		setTimeout(function () {
			element.classList.add("highlight");
		}, 1000);

		setTimeout(function () {
			element.classList.remove("highlight");
			typed = "";
			element.innerHTML = typed;
			startType(getRandomPun(), 0);
		}, 2000);
	}
}

function getRandomPun() {
	const puns = [
		"Ром",
		"Текила",
		"Виски",
		"Коньяк",
		"Джин",
		"Водка",
	];
	const index = Math.floor(Math.random() * puns.length);

	return puns[index];
}

startType(getRandomPun(), 0);