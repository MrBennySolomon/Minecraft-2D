
const board = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 6, 6, 6],
  [6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 6, 6, 6],
  [6, 6, 6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 4, 4, 6, 3, 6, 6, 4],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
const selectedTool    = '';
const axe             = document.querySelector('.axe');
const shovel          = document.querySelector('.shovel');
const pickaxe         = document.querySelector('.pickaxe');
const gameBoard       = document.querySelector('body .game #game-board');
const lastPickedFrame = document.querySelector('.last-picked');
const tilesPicked     = [];
const btnReset        = document.querySelector('.reset');

btnReset.addEventListener('click', (e) => {
  while (gameBoard.hasChildNodes()) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  buildBoard(board);
})
axe.addEventListener('click', function(e) {
  pickaxe.classList.remove('selected');
  shovel.classList.remove('selected');
  axe.classList.add('selected');
  selectedTool = 'axe';
});
shovel.addEventListener('click', function(e) {
  pickaxe.classList.remove('selected');
  axe.classList.remove('selected');
  shovel.classList.add('selected');
  selectedTool = 'shovel';
});
pickaxe.addEventListener('click', function(e) {
  axe.classList.remove('selected');
  shovel.classList.remove('selected');
  pickaxe.classList.add('selected');
  selectedTool = 'pickaxe';
  
});


const buildBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement('div');
      switch (board[i][j]) {
        case 1:
          cell.classList.add('dirt');
          cell.setAttribute('tool', 'shovel');
          break;
        case 2:
          cell.classList.add('grass');
          cell.setAttribute('tool', 'shovel');
          break;
        case 3:
          cell.classList.add('wood');
          cell.setAttribute('tool', 'axe');
          break;
        case 4:
          cell.classList.add('stone');
          cell.setAttribute('tool', 'pickaxe');
          break;
        case 5:
          cell.classList.add('leaves');
          cell.setAttribute('tool', 'shovel');
          break;
        case 6:
          cell.classList.add('sky');
          cell.setAttribute('tool', 'none');
          break;
        case 7:
          cell.classList.add('cloud');
          cell.setAttribute('tool', 'none');
          break;
        default:
          throw new Error('NON RECOGNIZED NUMBER');
          break;
      }
      gameBoard.appendChild(cell);
    }  
  }
}

gameBoard.addEventListener('click', function(event) {
  tilesPicked.push(event.target);
  lastPickedFrame.classList.add(tilesPicked[tilesPicked.length - 1].getAttribute('class'));
  event.target.setAttribute('class', 'none');
});

buildBoard(board);




