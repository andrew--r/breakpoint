import Breakpoint from './modules/breakpoint.js';

Breakpoint.between([768, 1024], () => {
	console.log('Current screen width is between 768 and 1024 pixels.');
});

Breakpoint.above(1024, function() {
	console.log('Current screen width is', this.innerWidth);
}, window);
