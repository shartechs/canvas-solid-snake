//board
const blockSize = 25;
const rows = 20;
const cols = 20;
const board = document.getElementById("board");
const context = board.getContext("2d");

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let velocityX = 0;
let velocityY = 0;

//food
let foodX;
let foodY;

window.onload = () => {
  board.width = cols * blockSize;
  board.height = rows * blockSize;

  placeFood();

  document.addEventListener("keydown", changeDirection);
  setInterval(update, 1000 / 10);
};

const changeDirection = (e) => {
  switch (e.code) {
    case "ArrowUp":
      if (velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
      }
      break;
    case "ArrowDown":
      if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
      }

      break;
    case "ArrowRight":
      if (velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
      }
      break;
    case "ArrowLeft":
      if (velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
      }
      break;
  }
};

const update = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
  if (snakeX === foodX && snakeY === foodY) {
    placeFood();
  }

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;

  context.fillRect(snakeX, snakeY, blockSize, blockSize);
};

const placeFood = () => {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
};
