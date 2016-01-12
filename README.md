# Breakpoint.js
> A tiny library to make your JavaScript a bit more responsive

Use this library if you need to do some stuff in dependence on current screen width.

Breakpoint.js uses `window.matchMedia`, so it [supports](http://caniuse.com/#feat=matchmedia) only IE10+.

 ```
✓ Available to use as AMD, CommonJS or ES2015 module
✓ No dependencies
✓ Small size (~350 bytes uncompiled, ~850 bytes compiled)
✓ Just one function, no complicated APIs
```

## Usage
Example is written in ES2015.

```javascript
import breakpoint from './modules/breakpoint.js';


let destroyBreakpoint = breakpoint({
  query: '(min-width: 1024)',
  success: () => console.log('Window width is above 1024px'),
  fail: () => console.log('Window width is below 1024px'), // optional
  context: null // optional, null is set by default
});
```