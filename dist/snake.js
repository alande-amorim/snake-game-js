function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getInputDirection } from './input.js';
export const SNAKE_SPEED = 5;
const snakeBody = [{
  x: 11,
  y: 11
}];
let newSegments = 0;
export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  ;

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = _objectSpread({}, snakeBody[i]);
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}
export function expandSnake(amount) {
  newSegments += amount;
}
export function onSnake(position) {
  let {
    ignoreHead = false
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}
export function getSnakeHead() {
  return snakeBody[0];
}
export function snakeIntersects() {
  return onSnake(getSnakeHead(), {
    ignoreHead: true
  });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push(_objectSpread({}, snakeBody[snakeBody.length - 1]));
  }

  newSegments = 0;
}