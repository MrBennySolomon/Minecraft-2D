'use strict';

class View {
  axe;
  shovel;
  pickaxe;
  btnReset;
  lastPickedFrame;
  screenGameBoard;
  constructor () {
    this.axe             = document.querySelector('.axe');
    this.shovel          = document.querySelector('.shovel');
    this.pickaxe         = document.querySelector('.pickaxe');
    this.btnReset        = document.getElementById('reset');
    this.lastPickedFrame = document.querySelector('.last-picked');
    this.screenGameBoard = document.querySelector('body .game #game-board');
  }

  appendChild (cell) {
    this.screenGameBoard.appendChild(cell);
  }
}



