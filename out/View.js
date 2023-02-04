var View = /** @class */ (function () {
    function View() {
        this.axe = document.querySelector('.axe');
        this.shovel = document.querySelector('.shovel');
        this.pickaxe = document.querySelector('.pickaxe');
        this.btnReset = document.getElementById('reset');
        this.lastPickedFrame = document.querySelector('.last-picked');
        this.screenGameBoard = document.querySelector('body .game #game-board');
    }
    View.prototype.getLastPickedFrame = function () {
        return this.lastPickedFrame;
    };
    View.prototype.getAxe = function () {
        return this.axe;
    };
    View.prototype.getShovel = function () {
        return this.shovel;
    };
    View.prototype.getPickaxe = function () {
        return this.pickaxe;
    };
    View.prototype.getBtnReset = function () {
        return this.btnReset;
    };
    View.prototype.getScreenGameBoard = function () {
        return this.screenGameBoard;
    };
    View.prototype.appendChild = function (cell) {
        this.screenGameBoard.appendChild(cell);
    };
    View.prototype.removeClassAxe = function (str) {
        this.axe.classList.remove(str);
    };
    View.prototype.removeClassPickaxe = function (str) {
        this.pickaxe.classList.remove(str);
    };
    View.prototype.removeClassShovel = function (str) {
        this.shovel.classList.remove(str);
    };
    View.prototype.removeClassLastPickedFrame = function (str) {
        this.lastPickedFrame.classList.remove(str);
    };
    View.prototype.addClassAxe = function (str) {
        this.axe.classList.add(str);
    };
    View.prototype.addClassPickaxe = function (str) {
        this.pickaxe.classList.add(str);
    };
    View.prototype.addClassShovel = function (str) {
        this.shovel.classList.add(str);
    };
    View.prototype.addClassLastPickedFrame = function (str) {
        this.lastPickedFrame.classList.add(str);
    };
    View.prototype.removeFirstChildScreenGameBoard = function () {
        this.screenGameBoard.removeChild(this.screenGameBoard.firstChild);
    };
    return View;
}());
