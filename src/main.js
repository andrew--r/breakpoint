import breakpoint from './modules/breakpoint.js';

let config = {
  query: '(min-width: 1024px)',
  success: () => console.log('Window width is above 1024px'),
  fail: () => console.log('Window width is below 1024px'),
  context: window
};

breakpoint(config);