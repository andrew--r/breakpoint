export default function({query, success, fail, context = null}) {
	let mql = window.matchMedia(query);
	let handler = function() {
		this.matches ? success.call(context) : (fail && fail.call(context));
	}.bind(mql);

	mql.addListener(handler);
	document.addEventListener('DOMContentLoaded', handler);

  return () => mql.removeListener(handler);
};