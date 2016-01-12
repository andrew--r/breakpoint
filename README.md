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

let config = {
  // media query
  // type: string
  // required
  query: '(min-width: 1024px)',

  // callback to call when the query result is true
  // type: function
  // required
  success: () => console.log('Window width is above 1024px'),

  // function to call when the query result is false
  // type: function
  // optional
  fail: () => console.log('Window width is below 1024px')},
  
  // context to set on success and fail callbacks
  // type: object
  // default: null
  // optional
  context: window
};

// breakpoint will be automatically listening for changes
let destroyBreakpoint = breakpoint(config);

// if you need to stop listening for changes,
// just call the assigned variable
destroyBreakpoint();
```