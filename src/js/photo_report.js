import "@styles/main.scss";
import "@styles/photo_report.scss";
import "@styles/responsive/photo_report-responsive.scss";
import "@styles/_header.scss";
import "@styles/_footer.scss";
import "@styles/_null.scss";
import "@styles/_fonts.scss";


class Gallery {
	constructor(card) {
		// Store the card element and its inner element
		this.card = card;
		this.inner = card.querySelector(".gallery__inner");

		// If the inner element or the card element are not found, throw an error
		if (!this.inner || !this.card) {
			throw new Error("Element with class 'card' or 'gallery__inner' not found");
		}

		// Precalculate some values
		this.xMiddle = this.card.offsetWidth / 2;
		this.yMiddle = this.card.offsetHeight / 2;
		this.MAX_DIST = Math.hypot(this.xMiddle, this.yMiddle);

		// Initialize the events and other logic
		this.init();
	}

	calculateMousePosition(mouseX, mouseY, left, top) {
		// Calculate the X and Y percentages based on the mouse position and the card element's dimensions
		const xPerc = ((left - mouseX) / this.card.offsetWidth) * 100;
		const yPerc = ((top - mouseY) / this.card.offsetHeight) * 100;

		return { xPerc, yPerc };
	}

	calculateMouseCoordinates(mouseX, mouseY, left, top) {
		// Calculate the X and Y coordinates of the mouse relative to the center of the card element
		const xCoord = mouseX - left - this.xMiddle;
		const yCoord = mouseY - top - this.yMiddle;

		return { xCoord, yCoord };
	}

	calculateDistance(xCoord, yCoord) {
		// Calculate the distance between the mouse and the center of the card element
		const dist = Math.hypot(xCoord, yCoord);

		return dist;
	}

	calculateRotation(mouseX, mouseY, right, bottom) {
		// Calculate the Y and X rotation values based on the mouse position and the card element's dimensions
		const yRotation =
			(
				((mouseY - bottom) * -1 - this.yMiddle) /
				this.card.offsetHeight
			).toFixed(2) * 4;
		const xRotation =
			(((mouseX - right) * -1 - this.xMiddle) / this.card.offsetWidth).toFixed(
				2
			) * -4;

		return { yRotation, xRotation };
	}

	calculateValues(e) {
		// Destructure the bounding client rect of the card element
		const { top, right, bottom, left } = this.card.getBoundingClientRect();

		// Destructure the mouse X and Y positions from the event
		const { clientX: mouseX, clientY: mouseY } = e;

		// Calculate the X and Y percentages based on the mouse position and the card element's dimensions
		const { xPerc, yPerc } = this.calculateMousePosition(
			mouseX,
			mouseY,
			left,
			top
		);

		// Calculate the X and Y coordinates of the mouse relative to the center of the card element
		const { xCoord, yCoord } = this.calculateMouseCoordinates(
			mouseX,
			mouseY,
			left,
			top
		);

		// Calculate the distance between the mouse and the center of the card element
		const dist = this.calculateDistance(xCoord, yCoord);

		// Calculate the Y and X rotation values based on the mouse position and the card element's dimensions
		const { yRotation, xRotation } = this.calculateRotation(
			mouseX,
			mouseY,
			right,
			bottom
		);

		return { xPerc, yPerc, dist, yRotation, xRotation };
	}

	// Animate the card element and its inner element based on the mouse position
	animate(e) {
		const { xPerc, yPerc, yRotation, xRotation, dist } = this.calculateValues(
			e
		);

		// Use requestAnimationFrame to update the card element's and its inner element's styles
		requestAnimationFrame(() => {
			this.card.style.setProperty("--trans", "none 0s ease");
			this.card.style.setProperty("--x", `${xPerc.toFixed(2)}%`);
			this.card.style.setProperty("--y", `${yPerc.toFixed(2)}%`);

			this.inner.style.setProperty("transition", "transform 0.1s ease-out");
			this.inner.style.transform = `scale3d(1.04, 1.04, 1.04) rotate3d(${yRotation}, ${xRotation}, 0, ${(dist / this.MAX_DIST) * 12
				}deg)`;
		});
	}

	// Update the values that impact the animation
	updateValues() {
		// Recalculate the X and Y middle values based on the card element's dimensions
		this.xMiddle = this.card.offsetWidth / 2;
		this.yMiddle = this.card.offsetHeight / 2;

		// Recalculate the maximum distance based on the X and Y middle values
		this.MAX_DIST = Math.hypot(this.xMiddle, this.yMiddle);
	}

	events() {
		// Add a mousemove event listener to the card element, calling the animate method on every mouse move
		this.card.addEventListener("mousemove", (e) => this.animate(e), {
			passive: true
		});

		// Add a mouseleave event listener to the card element, resetting the card element's and its inner element's styles on mouse leave
		this.card.addEventListener(
			"mouseleave",
			() => {
				this.inner.addEventListener(
					"transitionend",
					() => {
						requestAnimationFrame(() => {
							this.card.removeAttribute("style");
							this.inner.removeAttribute("style");
						});
					},
					{ once: true }
				);
			},
			{ passive: true }
		);

		// Add a resize event listener to the window object, calling the updateValues method on every resize
		// NOTE: consider using a debounce function for such event listener
		window.addEventListener("resize", () => this.updateValues());
	}

	init() {
		// Initialize the events and other logic
		this.events();
	}
}

const init = () => {
	// Check if the user has indicated a preference to reduce motion
	const { matches: isReducedMotionPreferred } = window.matchMedia(
		"(prefers-reduced-motion: reduce)"
	);

	// If the user has indicated a preference to reduce motion, return
	if (isReducedMotionPreferred) return;

	// Find all elements with the class 'card' and create a new Card instance for each one
	document.querySelectorAll(".gallery__item").forEach((card) => new Gallery(card));
};

init();
