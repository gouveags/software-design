const blue = (left, right) => {
  console.log('BLUE');
  left(right);
}

blue(
  (callback) => {
    console.log('GREEN')
    callback()
  },
  () => console.log('RED')
);

// Answering before first execution:
// The execution in the exact sme order as trace.js
// should be: BLUE --> GREEN --> RED
