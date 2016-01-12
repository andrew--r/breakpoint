export default function({query, succes, fail, context = null}) {
	let mql = window.matchMedia(query);
	let handler = function() {
		this.matches ? success.call(context) : fail.call(context);
	}.bind(mql);

	mql.addListener(handler);

	document.addEventListener('DOMContentLoaded', handler);
};