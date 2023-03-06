// const buttons = document.querySelectorAll(".trigger[data-modal-trigger]");

// for (let button of buttons) {
// 	modalEvent(button);
// };

// function modalEvent(button) {
// 	button.addEventListener("click", () => {
// 		const trigger = button.getAttribute("data-modal-trigger");
// 		console.log("trigger", trigger)
// 		const modal = document.querySelector(`[data-modal=${trigger}]`);
// 		console.log("modal", modal)
// 		const componentWrapper = modal.querySelector(".component-wrapper");
// 		const close = modal.querySelector(".close");

// 		close.addEventListener("click", () => modal.classList.remove("open"));
// 		modal.addEventListener("click", () => modal.classList.remove("open"));
// 		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

// 		modal.classList.toggle("open");
// 	});
// };
