/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./js/circles.js ***!
  \***********************/
//Create canvas and initialize context
const canvas = document.getElementById("circles");
const context = canvas.getContext("2d");

//Set the dimensions of canvas equal to the dimensions of the card
const W = canvas.width = document.getElementById("circles").clientWidth;
const H = canvas.height = document.getElementById("circles").clientHeight;

//Number of circles
const circleNbr = 18;

// Gradient
const bgColor1 = 'rgba(4, 7, 15, 1)';
const bgColor2 = 'rgba(4, 7, 15, 1)';

//Create an array of circles
let circles = [];
for (let i = 0; i < circleNbr; i++) {
	circles.push(new circle());
}

//Function to create a circle
function circle() {
	//Random Position
	this.x = Math.random() * W;
	this.y = Math.random() * H;

	//Random Velocities
	this.vx = 0.2 + Math.random() * 0.5;
	this.vy = -this.vx;

	//Random Radius
	this.r = 3 + Math.random() * 2;

	//Random opacity color
	this.color = "rgba(22, 61, 79," + (Math.random() * (1 - .5) + .5).toFixed(1) + ")";
}

//Function to draw the gradient background with the circles
function draw() {

	const gradient = context.createLinearGradient(0, 0, W, H);
	gradient.addColorStop(0, bgColor1);
	gradient.addColorStop(1, bgColor2);

	//Fill the canvas with the gradient
	context.fillStyle = gradient;
	context.fillRect(0, 0, W, H);

	//Fill the canvas with the circles
	for (let j = 0; j < circles.length; j++) {
		let c = circles[j];

		//Draw the circle
		context.beginPath();
		context.arc(c.x, c.y, c.r, Math.PI * 2, false);
		context.fillStyle = c.color;
		context.fill();

		//Velocity
		c.x -= c.vx;
		c.y += c.vy;

		//When the circles are out of the canvas
		if (c.x < -20) c.x = W + 20;
		if (c.y < -20) c.y = H + 20;
	}
}
setInterval(draw, 10);
/******/ })()
;
//# sourceMappingURL=circles.bundle.js.map