import { 
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersects,
} from './snake.js';
import { outsideGrid } from './grid.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    window.navigator.vibrate(100);

    setTimeout(() => {
      if (confirm('Game over. Play again?')) {
        window.location = window.location;
      }
    }, 10);
    
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLsastRender = (currentTime - lastRenderTime)/1000;
  if (secondsSinceLsastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  if(!gameOver) {
    update();
    draw();
  }
}

window.requestAnimationFrame(main);


function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersects()
}