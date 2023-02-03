'use strict';

class Model {
  board;
  tilesPicked;
  selectedTool;
  lastPickedTile;
  constructor() {
    this.board          = JSON.parse(localStorage.getItem('board'));
    this.tilesPicked    = JSON.parse(localStorage.getItem('tilesPicked'));
    this.selectedTool   = JSON.parse(localStorage.getItem('selectedTool'));
    this.lastPickedTile = JSON.parse(localStorage.getItem('lastPickedTile'));
  }

  get tilesPicked () {
    return this.tilesPicked;
  }

  get selectedTool () {
    return this.selectedTool;
  }

  set selectedTool (tool) {
    this.selectedTool = tool;
  }

  set tilesPicked (tiles) {
    this.tilesPicked = tiles;
  }

  getBoardRows() {
    return this.board.length;
  }

  getBoardCols() {
    return this.board[0].length;
  }

  getBoardIndex (i, j) {
    return this.board[i][j];
  }

  pushTiles(type) {
    this.tilesPicked.push(type);
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
    localStorage.setItem('lastPickedTile', JSON.stringify(this.tilesPicked[this.tilesPicked.length - 1]));
    this.lastPickedTile = type;
  }

  deleteTiles () {
    this.tilesPicked = [];
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
  }

  setSelectedTool (tool) {
    this.selectedTool = tool;
    localStorage.setItem('selectedTool', JSON.stringify(tool));
  }

  getLastPickedTile () {
    const returnValue = this.tilesPicked[this.tilesPicked.length - 1];
    this.tilesPicked.pop();
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
    this.lastPickedTile = returnValue;
    return returnValue;
  }
}
