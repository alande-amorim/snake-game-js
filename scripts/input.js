let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const arrowUpBtn = document.querySelector('#arrow-up');
const arrowLeftBtn = document.querySelector('#arrow-left');
const arrowDownBtn = document.querySelector('#arrow-down');
const arrowRightBtn = document.querySelector('#arrow-right');

function moveUp() {
  window.navigator.vibrate(25);

  inputDirection = lastInputDirection.y !== 0 
    ? inputDirection
    : { x: 0, y: -1 };
}

function moveLeft() {
  window.navigator.vibrate(25);

  inputDirection = lastInputDirection.x !== 0 
    ? inputDirection
    : { x: -1, y: 0 };
}

function moveDown() {
  window.navigator.vibrate(25);

  inputDirection = lastInputDirection.y !== 0 
    ? inputDirection
    : { x: 0, y: 1 };
}

function moveRight() {
  window.navigator.vibrate(25);

  inputDirection = lastInputDirection.x !== 0 
    ? inputDirection
    : { x: 1, y: 0 };
}

window.addEventListener('keydown', e => {
  let fn = {
    'ArrowUp': moveUp,
    'ArrowDown': moveDown,
    'ArrowLeft': moveLeft,
    'ArrowRight': moveRight,
  }[e.key];

  fn ? fn.call() : null;
});

arrowUpBtn.addEventListener('click', moveUp);
arrowLeftBtn.addEventListener('click', moveLeft);
arrowDownBtn.addEventListener('click', moveDown);
arrowRightBtn.addEventListener('click', moveRight);

export function getInputDirection() {
  lastInputDirection = inputDirection;

  return inputDirection;
}