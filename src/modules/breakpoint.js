export default function({query, success, fail, context = null}) {
	let mql = window.matchMedia(query);
	let handler = function() {
		mql.matches ? success.call(context) : (fail && fail.call(context));
	};

	mql.addListener(handler);
	document.addEventListener('DOMContentLoaded', handler);

  return () => mql.removeListener(handler);
};