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
  

const buttonStart = document.querySelector('.button-start');
const mainScreen = document.querySelector('.main-screen');
const logoButtonStart = document.querySelector('.logo-button-start');
const realGame = document.querySelector('.real-game');

buttonStart.addEventListener('click', function() {
  logoButtonStart.setAttribute('class', 'none');
  mainScreen.setAttribute('class', 'real-game');
  buildBoard();

});

const buildBoard = () => {
  for (let i = 0; i < 20; i++) {
  
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement('div');
      for (let j = 0; j < 20; j++) {
        switch (board[i][j]) {
          case 1:
            cell.classList.add('dirt');
            realGame.appendChild(cell);
            break;
          case 2:
            cell.classList.add('grass');
            realGame.appendChild(cell);
            break;
          case 3:
            cell.classList.add('leaves');
            realGame.appendChild(cell);
            break;
          case 4:
            cell.classList.add('stone');
            realGame.appendChild(cell);
            break;
          case 5:
            cell.classList.add('wood');
            realGame.appendChild(cell);
            break;
          case 6:
            cell.classList.add('sky');
            realGame.appendChild(cell);
            break;
          case 7:
            cell.classList.add('cloud');
            realGame.appendChild(cell);
            break;
          default:
            break;
        }
      }  
    } 
  }
  // document.body.appendChild(mainScreen);
}


buildBoard();




