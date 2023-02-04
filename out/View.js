class View {
    constructor() {
        this.axe = document.querySelector('.axe');
        this.shovel = document.querySelector('.shovel');
        this.pickaxe = document.querySelector('.pickaxe');
        this.btnReset = document.getElementById('reset');
        this.lastPickedFrame = document.querySelector('.last-picked');
        this.screenGameBoard = document.querySelector('body .game #game-board');
    }
    getLastPickedFrame() {
        return this.lastPickedFrame;
    }
    getAxe() {
        return this.axe;
    }
    getShovel() {
        return this.shovel;
    }
    getPickaxe() {
        return this.pickaxe;
    }
    getBtnReset() {
        return this.btnReset;
    }
    getScreenGameBoard() {
        return this.screenGameBoard;
    }
    appendChild(cell) {
        this.screenGameBoard.appendChild(cell);
    }
    removeClassAxe(str) {
        this.axe.classList.remove(str);
    }
    removeClassPickaxe(str) {
        this.pickaxe.classList.remove(str);
    }
    removeClassShovel(str) {
        this.shovel.classList.remove(str);
    }
    removeClassLastPickedFrame(str) {
        this.lastPickedFrame.classList.remove(str);
    }
    addClassAxe(str) {
        this.axe.classList.add(str);
    }
    addClassPickaxe(str) {
        this.pickaxe.classList.add(str);
    }
    addClassShovel(str) {
        this.shovel.classList.add(str);
    }
    addClassLastPickedFrame(str) {
        this.lastPickedFrame.classList.add(str);
    }
    removeFirstChildScreenGameBoard() {
        this.screenGameBoard.removeChild(this.screenGameBoard.firstChild);
    }
}
