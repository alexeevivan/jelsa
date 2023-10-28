import "@styles/_gallery.scss";
import * as $ from "jquery";
import swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
import gsap from "./_vendors/gsap.min.js";
import ScrollTrigger from "./_vendors/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);

let items = document.querySelectorAll(".list__item");

items.forEach(item => {
	let itemTitle = item.querySelector(".list__item-title")

	let itemTL = gsap.timeline({
		scrollTrigger: {
			trigger: item,
			start: "0% 75%",
			end: "25% 50%",
			scrub: 3,
		}
	})

	itemTL.fromTo(itemTitle, { scale: 2, y: "100%" }, { scale: 1, y: "0%", ease: "power2.inOut" }, 0)

});