# Breakpoint.js
> A tiny library to make your JavaScript a bit more responsive

Use this library if you need to do some stuff in dependence on current screen width.

 ```
✓ Available to use as AMD, CommonJS or ES2015 module
✓ No dependencies
✓ Small size (~1kb)
✓ Just three simple methods, no complicated APIs
```

## Usage
Example is written in ES2015.

```javascript
import Breakpoint from './modules/breakpoint.js';
```

Breakpoint object has three methods:

1. `Breakpoint.below(width, callback, context)`
2. `Breakpoint.above(width, callback, context)`
3. `Breakpoint.between([minWidth, maxWidth], callback, context)`,

where:

- `width`, `minWidth`, `maxWidth` — number;
- `callback` — function to call when condition (current screen width is below, above or between specified width) is true;
- `context` — execution context for the callback, default is `null`.

Example of usage (you can [see it in action](http://andrew--r.github.io/breakpoint)):

```javascript
Breakpoint.between([768, 1024], () => {
  console.log('Current screen width is between 768 and 1024 pixels.');
});

// Custom context for the callback
Breakpoint.above(1024, function() {
	console.log('Current screen width is', this.innerWidth);
}, window);
```
