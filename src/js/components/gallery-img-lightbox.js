import imagesLoaded from "imagesloaded";
/**
 * Get proper browser prefix for events such as 'ontransitionend' or 'onaminationend'
 * @param  {Node}       element    Element to attach the event
 * @param  {String}     type       The event you want a prefix for
 * @param  {Function}   callback   The callback with the correct prefix
 */
const prefixes = ['webkit', 'moz', 'MS', 'o', ''];
const getPrefixedEvent = (element, type, callback) => {
	prefixes.forEach(prefix => {
		if (!prefix) {
			type = type.toLowerCase();
		}
		element.addEventListener(prefix + type, callback, false);
	});
};

const lightbox = document.querySelector('.lightbox');
const lightboxContent = lightbox.querySelector('.lightbox-content');
const lightboxShowImage = (source) => {
	document.body.classList.add('js-lightbox-loading');
	document.body.classList.remove('js-lightbox-active');
	document.body.classList.remove('js-lightbox-first');
	document.body.classList.remove('js-lightbox-last');

	lightboxContent.innerHTML = '<img src="' + source + '" />';
	imagesLoaded(lightboxContent, function () {
		document.body.classList.remove('js-lightbox-loading');
		document.body.classList.add('js-lightbox-active');
	});
};

const lightboxOpen = (event) => {
	event.preventDefault();

	const element = event.target.closest('a');

	lightboxShowImage(element.href);
};

const lightboxLinkOpen = document.querySelectorAll('[data-action="lightbox-open"]');
let lightboxImages = [];
lightboxLinkOpen.forEach((link) => {
	lightboxImages.push(link.getAttribute('href'));
	link.addEventListener('click', lightboxOpen);
});

const lightboxClose = (event) => {
	if (event) {
		event.preventDefault();
	}

	document.body.classList.remove('js-lightbox-loading');
	document.body.classList.remove('js-lightbox-active');
	lightboxContent.innerHTML = '';
};
const lightboxLinkClose = document.querySelectorAll('[data-action="lightbox-close"]');
lightboxLinkClose.forEach((link) => {
	link.addEventListener('click', lightboxClose);
});

document.addEventListener('keyup', (event) => {
	// keys registered - escape, page up and page down
	if ((event.keyCode === 27 || event.keyCode === 33 || event.keyCode === 34) && (document.body.classList.contains('js-lightbox-loading') || document.body.classList.contains('js-lightbox-active'))) {
		lightboxClose();
	}
});
document.addEventListener('mousewheel', (event) => {
	if (document.body.classList.contains('js-lightbox-loading') || document.body.classList.contains('js-lightbox-active')) {
		lightboxClose();
		// REMEBER TO CHECK IF IMAGE IS SCROLLED TO TOP OR BOTTOM + SOME EXTRA
	}
});

const lightboxPrevious = (event) => {
	let currentIndex = lightboxImages.indexOf(lightboxContent.querySelector('img').src);

	currentIndex--;

	if (currentIndex >= 0) {
		lightboxShowImage(lightboxImages[currentIndex]);
	} else {
		document.body.classList.add('js-lightbox-first');
		getPrefixedEvent(lightboxContent, 'TransitionEnd', () => {
			document.body.classList.remove('js-lightbox-first');
		});
	}
};
const lightboxLinkPrevious = document.querySelectorAll('[data-action="lightbox-previous"]');
lightboxLinkPrevious.forEach((link) => {
	link.addEventListener('click', lightboxPrevious);
});

document.addEventListener('keyup', (event) => {
	// keys registered - left arrow and down arrow
	if ((event.keyCode === 37 || event.keyCode === 40) && (document.body.classList.contains('js-lightbox-loading') || document.body.classList.contains('js-lightbox-active'))) {
		lightboxPrevious();
	}
});

const lightboxNext = (event) => {
	let currentIndex = lightboxImages.indexOf(lightboxContent.querySelector('img').src);

	currentIndex++;

	if (currentIndex < lightboxImages.length) {
		lightboxShowImage(lightboxImages[currentIndex]);
	} else {
		document.body.classList.add('js-lightbox-last');
		getPrefixedEvent(lightboxContent, 'TransitionEnd', () => {
			document.body.classList.remove('js-lightbox-last');
		});
	}
};
const lightboxLinkNext = document.querySelectorAll('[data-action="lightbox-next"]');
lightboxLinkNext.forEach((link) => {
	link.addEventListener('click', lightboxNext);
});

document.addEventListener('keyup', (event) => {
	// keys registered - up arrow and right arrow
	if ((event.keyCode === 38 || event.keyCode === 39) && (document.body.classList.contains('js-lightbox-loading') || document.body.classList.contains('js-lightbox-active'))) {
		lightboxNext();
	}
});

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

document.addEventListener('touchstart', (event) => {
	if (event.target === lightboxContent || event.target === lightboxContent.querySelector('img')) {
		startX = event.pageX || event.touches[0].pageX;
		startY = event.pageY || event.touches[0].pageY;
	}
});
document.body.addEventListener('touchmove', (event) => {
	if (event.target === lightboxContent || event.target === lightboxContent.querySelector('img')) {
		endX = event.pageX || event.touches[0].pageX;
		endY = event.pageY || event.touches[0].pageY;
	}
});
document.addEventListener('touchend', (event) => {
	if (event.target === lightboxContent || event.target === lightboxContent.querySelector('img')) {
		const distanceX = startX - endX;
		const distanceY = startY - endY;

		if (Math.abs(distanceX) > Math.abs(distanceY)) {
			if (distanceX > 0) {
				lightboxNext();
			} else {
				lightboxPrevious();
			}
		} else {
			lightboxClose();
		}
	}
});