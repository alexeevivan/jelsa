import * as $ from "jquery";
import "@styles/main.scss";
import "@styles/_faq.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";
import "@styles/_vendor.scss";

// ==========================================================
// FAQ Accordion animation
// ==========================================================

$(".accordion__toggle.item-1").click(function () {
	$(".accordion__inner.item-1").animate({
		opacity: "0.5"
	});
	$(".accordion__toggle.item-1").addClass("open");
	$(".accordion__toggle.item-2").removeClass("open");
	$(".accordion__toggle.item-3").removeClass("open");
	$(".accordion__toggle.item-4").removeClass("open");
	$(".accordion__inner.item-2").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-3").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-4").animate({
		opacity: "0.1"
	});
});

$(".accordion__toggle.item-2").click(function () {
	$(".accordion__inner.item-2").animate({
		opacity: "0.5"
	});
	$(".accordion__toggle.item-2").addClass("open");
	$(".accordion__toggle.item-1").removeClass("open");
	$(".accordion__toggle.item-3").removeClass("open");
	$(".accordion__toggle.item-4").removeClass("open");
	$(".accordion__inner.item-1").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-3").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-4").animate({
		opacity: "0.1"
	});
});

$(".accordion__toggle.item-3").click(function () {
	$(".accordion__inner.item-3").animate({
		opacity: "0.5"
	});
	$(".accordion__toggle.item-3").addClass("open");
	$(".accordion__toggle.item-1").removeClass("open");
	$(".accordion__toggle.item-2").removeClass("open");
	$(".accordion__toggle.item-4").removeClass("open");
	$(".accordion__inner.item-1").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-2").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-4").animate({
		opacity: "0.1"
	});
});

$(".accordion__toggle.item-4").click(function () {
	$(".accordion__inner.item-4").animate({
		opacity: "0.5"
	});
	$(".accordion__toggle.item-4").addClass("open");
	$(".accordion__toggle.item-1").removeClass("open");
	$(".accordion__toggle.item-2").removeClass("open");
	$(".accordion__toggle.item-3").removeClass("open");
	$(".accordion__inner.item-1").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-2").animate({
		opacity: "0.1"
	});
	$(".accordion__inner.item-3").animate({
		opacity: "0.1"
	});

	if ($(".accordion__toggle.item-4").onclick) { }
});

$(".accordion__toggle").click(function (e) {
	e.preventDefault();

	let $this = $(this);

	if ($this.next().hasClass("visible")) {
		$this.next().removeClass("visible");
		$this.removeClass("open");
		$this.next().slideUp(350);
	} else {
		$this.parent().parent().find("li .accordion__inner").removeClass("visible");
		$this.parent().parent().find("li .accordion__inner").slideUp(350);
		$this.next().toggleClass("visible");
		$this.next().slideToggle(350);
	}
});