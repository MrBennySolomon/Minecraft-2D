const board = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6],
  [6, 6, 6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6],
  [6, 6, 6, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 4, 4, 6, 5, 6, 6, 4],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]

const dirt = document.createElement('div');
dirt.setAttribute('class', 'dirt');
const grass = document.createElement('div');
grass.setAttribute('class', 'grass');
const stone = document.createElement('div');
stone.setAttribute('class', 'stone');
const wood = document.createElement('div');
wood.setAttribute('class', 'wood');
const leaves = document.createElement('div');
leaves.setAttribute('class', 'leaves');
const sky = document.createElement('div');
sky.setAttribute('class', 'sky');
const cloud = document.createElement('div');
cloud.setAttribute('class', 'cloud');
  

const buttonStart = document.getElementById('btn-start');
const logoButtonStart = document.querySelector('.logo-button-start');
const gameBoard = document.getElementById('game-board');

buttonStart.addEventListener('click', function() {
  location.href = './game.html';
});

const buildBoard = (board) => {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      for (let j = 0; j < 20; j++) {
        const cell = document.createElement('div');
        switch (board[i][j]) {
          case 1:
            cell.classList.add('dirt');
            gameBoard.appendChild(cell);
            break;
          case 2:
            cell.classList.add('grass');
            gameBoard.appendChild(cell);
            break;
          case 3:
            cell.classList.add('leaves');
            gameBoard.appendChild(cell);
            break;
          case 4:
            cell.classList.add('stone');
            gameBoard.appendChild(cell);
            break;
          case 5:
            cell.classList.add('wood');
            gameBoard.appendChild(cell);
            break;
          case 6:
            cell.classList.add('sky');
            gameBoard.appendChild(cell);
            break;
          case 7:
            cell.classList.add('cloud');
            gameBoard.appendChild(cell);
            break;
          default:
            break;

        }
      }  
    } 
  }
  // document.body.appendChild(mainScreen);
}

gameBoard.addEventListener('click', function(event) {
  event.target.classList.add('none');
});

buildBoard(board);




