export default {
	below(resolution, callback, context = null) {
		let checker = function() {
			return window.innerWidth < resolution;
		};

		attachEventListeners(checker, callback, context);
	},

	above(resolution, callback, context = null) {
		let checker = function() {
			return window.innerWidth > resolution;
		};

		attachEventListeners(checker, callback, context);
	},

	between(resolutions, callback, context = null) {
		let checker = function() {
			return window.innerWidth > resolutions[0] && window.innerWidth < resolutions[1];
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
