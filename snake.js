const blockSize = 25;
const rows = 20;
const cols = 20;
const board = document.getElementById("board");
const context = board.getContext("2d");

window.onload = () => {
  board.width = cols * blockSize;
  board.height = rows * blockSize;

  update();
};

const update = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
};
