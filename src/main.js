export default {
	below(width, callback, context = null) {
		let checker = function() {
			return screenWidth() < width;
		};

		attachEventListeners(checker, callback, context);
	},

	above(width, callback, context = null) {
		let checker = function() {
			return screenWidth() > width;
		};

		attachEventListeners(checker, callback, context);
	},

	between(widths, callback, context = null) {
		let checker = function() {
			return screenWidth() > widths[0] && screenWidth() < widths[1];
		};

		attachEventListeners(checker, callback, context);
	}
};

function attachEventListeners(checker, callback, context) {
	document.addEventListener('DOMContentLoaded', () => {
		checker() && callback.call(context);
	});

	window.addEventListener('resize', () => {
		checker() && callback.call(context);
	});
}

function screenWidth() {
	return document.documentElement.clientWidth;
}
