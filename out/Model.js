class Model {
    constructor() {
        this.board = JSON.parse(localStorage.getItem('board'));
        this.tilesPicked = JSON.parse(localStorage.getItem('tilesPicked'));
        this.selectedTool = JSON.parse(localStorage.getItem('selectedTool'));
        this.lastPickedTile = JSON.parse(localStorage.getItem('lastPickedTile'));
    }
    getLastPickedTile() {
        return this.lastPickedTile;
    }
    getTilesPicked() {
        return this.tilesPicked;
    }
    getSelectedTool() {
        return this.selectedTool;
    }
    setLastPickedTile(value) {
        this.lastPickedTile = value;
    }
    setSelectedTool(tool) {
        this.selectedTool = tool;
        localStorage.setItem('selectedTool', JSON.stringify(this.selectedTool));
    }
    setTilesPicked(tiles) {
        this.tilesPicked = tiles;
    }
    getBoardRows() {
        return this.board.length;
    }
    getBoardCols() {
        return this.board[0].length;
    }
    getBoardIndex(i, j) {
        return this.board[i][j];
    }
    pushTiles(type) {
        this.tilesPicked.push(type);
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.tilesPicked[this.tilesPicked.length - 1]));
        this.lastPickedTile = type;
    }
    deleteAll() {
        this.tilesPicked = [];
        this.selectedTool = '';
        this.lastPickedTile = '';
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('selectedTool', JSON.stringify(this.selectedTool));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
    }
    updateLastPickedTile() {
        this.tilesPicked.pop();
        this.lastPickedTile = this.tilesPicked.length === 0 ? '' : this.tilesPicked[this.tilesPicked.length - 1];
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
    }
}
