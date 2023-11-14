import "@styles/restaurant.scss";
import "@styles/responsive/restaurant-responsive.scss";

// ==========================================================
// Menu-list opening
// ==========================================================
const openModalBtnCuisine = document.querySelectorAll(".restaurant__cuisine[data-modal-trigger]");

for (let button of openModalBtnCuisine) {
	modalEvent(button);
};

for (let buttonSpirits of openModalBtnCuisine) {
	modalEventSpirits(buttonSpirits);
};

function modalEvent(button) {
	button.addEventListener("click", () => {
		const trigger = button.getAttribute("data-modal-trigger");
		console.log("restaurant__cuisine", trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		console.log("modal-cuisine", modal)
		const componentWrapper = modal.querySelector(".component-wrapper");
		const close = modal.querySelector(".close");

		close.addEventListener("click", () => modal.classList.remove("modal-show"));
		modal.addEventListener("click", () => modal.classList.remove("modal-show"));
		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

		modal.classList.toggle("modal-show");
	});
};