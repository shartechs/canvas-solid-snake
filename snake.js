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
let snakeBody = [];

//food
let foodX;
let foodY;

//Gameover
let gameOver = false;

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
  if (gameOver) return;
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length > 0) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;

  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // gameover condition #1 - snake collides with the board edges
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    alert("Game over!");
  }

  //game over condition #2 - snake collides with its body
};

const placeFood = () => {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
};
