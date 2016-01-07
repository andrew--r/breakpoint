export default {
	below(width, callback, context = null) {
		let checker = function() {
			return window.innerWidth < width;
		};

		attachEventListeners(checker, callback, context);
	},

	above(width, callback, context = null) {
		let checker = function() {
			return window.innerWidth > width;
		};

		attachEventListeners(checker, callback, context);
	},

	between(widths, callback, context = null) {
		let checker = function() {
			return window.innerWidth > widths[0] && window.innerWidth < widths[1];
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
};
