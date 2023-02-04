var Model = /** @class */ (function () {
    function Model() {
        this.board = JSON.parse(localStorage.getItem('board'));
        this.tilesPicked = JSON.parse(localStorage.getItem('tilesPicked'));
        this.selectedTool = JSON.parse(localStorage.getItem('selectedTool'));
        this.lastPickedTile = JSON.parse(localStorage.getItem('lastPickedTile'));
    }
    Model.prototype.getLastPickedTile = function () {
        return this.lastPickedTile;
    };
    Model.prototype.getTilesPicked = function () {
        return this.tilesPicked;
    };
    Model.prototype.getSelectedTool = function () {
        return this.selectedTool;
    };
    Model.prototype.setLastPickedTile = function (value) {
        this.lastPickedTile = value;
    };
    Model.prototype.setSelectedTool = function (tool) {
        this.selectedTool = tool;
    };
    Model.prototype.setTilesPicked = function (tiles) {
        this.tilesPicked = tiles;
    };
    Model.prototype.getBoardRows = function () {
        return this.board.length;
    };
    Model.prototype.getBoardCols = function () {
        return this.board[0].length;
    };
    Model.prototype.getBoardIndex = function (i, j) {
        return this.board[i][j];
    };
    Model.prototype.pushTiles = function (type) {
        this.tilesPicked.push(type);
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.tilesPicked[this.tilesPicked.length - 1]));
        this.lastPickedTile = type;
    };
    Model.prototype.deleteAll = function () {
        this.tilesPicked = [];
        this.selectedTool = '';
        this.lastPickedTile = '';
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('selectedTool', JSON.stringify(this.selectedTool));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
    };
    Model.prototype.updateLastPickedTile = function () {
        this.tilesPicked.pop();
        this.lastPickedTile = this.tilesPicked.length === 0 ? '' : this.tilesPicked[this.tilesPicked.length - 1];
        localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
        localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
    };
    return Model;
}());
