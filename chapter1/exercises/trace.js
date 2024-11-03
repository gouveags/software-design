const red = () => {
  console.log('RED');
}

const green = (func) => {
  console.log('GREEN');
  func();
}

const blue = (left, right) => {
  console.log('BLUE');
  left(right);
}

blue(green, red);

// Answering before first execution:
// The execution order should be: BLUE --> GREEN -->w RED
