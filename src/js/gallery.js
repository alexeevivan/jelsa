import "@styles/_gallery.scss";
import * as $ from "jquery";
import gsap from "./_vendors/gsap.min.js";
import ScrollTrigger from "./_vendors/ScrollTrigger.min.js";
// import Observer from "./_vendors/Observer.min.js";
gsap.registerPlugin(ScrollTrigger, Observer);

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

	itemTL.fromTo(itemTitle, { opacity: 0, scale: 2, y: "100%" }, { opacity: 1, scale: 1, y: "0%", ease: "power2.inOut" }, 0)

});


gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
	images = document.querySelectorAll(".section__name"),
	headings = gsap.utils.toArray(".section-heading"),
	txt = gsap.utils.toArray(".txt"),
	outerWrappers = gsap.utils.toArray(".outer"),
	innerWrappers = gsap.utils.toArray(".inner"),
	//splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })),
	currentIndex = -1,
	wrap = gsap.utils.wrap(0, sections.length),
	animating,
	isFirst = true,
	animame;

//gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction, arrow) {
	console.log(arrow);

	index = wrap(index); // make sure it's valid
	//console.log(">> " + index);
	animating = true;
	let fromTop = direction === -1,
		dFactor = fromTop ? -1 : 1,
		tl = gsap.timeline({
			defaults: { duration: 1.25, ease: "power1.inOut" },
			onComplete: () => animating = false
		});

	//초기값 >> fromTop : false /  dFactor : 1
	//onDown >> fromTop : false /  dFactor : 1
	//onUp >> fromTop : true /  dFactor : -1
	console.log("fromTop : " + fromTop);
	console.log("dFactor : " + dFactor);

	if (isFirst) {
		if (currentIndex >= 0) {
			// The first time this function runs, current is -1
			gsap.set(sections[currentIndex], { zIndex: 0 });
			tl.to(images[currentIndex], { yPercent: -15 * dFactor })
				.set(sections[currentIndex], { autoAlpha: 0 });
		}
		gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

		tl.fromTo([outerWrappers[index], innerWrappers[index]], {
			yPercent: i => i ? -100 * dFactor : 100 * dFactor
		}, {
			yPercent: 0
		}, 0)
			.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
			.from(txt[index], { autoAlpha: 0, yPercent: 100, duration: 1, ease: 'power3' }, 1.5);
	} else {
		gsap.set(innerWrappers[0], { yPercent: 0 });
		gsap.to(sections[0], { autoAlpha: 1, duration: 2.5, ease: "Power0.easeNone" });
		isFirst = false;
	}

	console.log(">> " + headings);
	console.log(">> " + index + " / " + headings);
	console.log("currentIndex : " + currentIndex);


	headings.forEach((el) => {
		el.classList.remove("animate__fadeInUp", "animate__fadeOutUp");
		void el.offsetWidth;
	});
	if (!isFirst) {
		console.log("isFirst : " + isFirst);
	}
	headings[index].classList.add("animate__fadeInUp");
	currentIndex = index;

}

Observer.create({
	type: "wheel, touch",
	wheelSpeed: -1,
	onDown: () => !animating && gotoSection(currentIndex - 1, -1, "onDown"),
	onUp: () => !animating && gotoSection(currentIndex + 1, 1, "onUp"),
	//onDown: () => currentIndex > 0 && !animating && gotoSection(currentIndex - 1, -1), 
	//onUp: () => currentIndex < 3 && !animating && gotoSection(currentIndex + 1, 1),
	tolerance: 10,
	preventDefault: true
});

gotoSection(0, 1);

// original: https://codepen.io/BrianCross/pen/PoWapLP
// horizontal version: https://codepen.io/GreenSock/pen/xxWdeMK

/*
ScrollOut({
  onShown(el) {
	el.classList.add("animate__animated");
	console.log("ScrollOut");
  }
});
*/
