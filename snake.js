//board
const blockSize = 25;
const rows = 20;
const cols = 20;
const board = document.getElementById("board");
const context = board.getContext("2d");

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//food
let foodX = blockSize * 10;
let foodY = blockSize * 10;

window.onload = () => {
  board.width = cols * blockSize;
  board.height = rows * blockSize;

  update();
};

const update = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
};
