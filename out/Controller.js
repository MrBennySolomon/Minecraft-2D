var Controller = /** @class */ (function () {
    function Controller(model, view) {
        this.view = view;
        this.model = model;
    }
    Controller.prototype.getView = function () {
        return this.view;
    };
    Controller.prototype.getModel = function () {
        return this.model;
    };
    Controller.prototype.buildBoard = function () {
        for (var i = 0; i < this.model.getBoardRows(); i++) {
            for (var j = 0; j < this.model.getBoardCols(); j++) {
                var cell = document.createElement('div');
                switch (this.model.getBoardIndex(i, j)) {
                    case 1:
                        cell.classList.add('dirt');
                        cell.setAttribute('type', 'dirt');
                        cell.setAttribute('tool', 'shovel');
                        break;
                    case 2:
                        cell.classList.add('grass');
                        cell.setAttribute('type', 'grass');
                        cell.setAttribute('tool', 'shovel');
                        break;
                    case 3:
                        cell.classList.add('wood');
                        cell.setAttribute('type', 'wood');
                        cell.setAttribute('tool', 'axe');
                        break;
                    case 4:
                        cell.classList.add('stone');
                        cell.setAttribute('type', 'stone');
                        cell.setAttribute('tool', 'pickaxe');
                        break;
                    case 5:
                        cell.classList.add('leaves');
                        cell.setAttribute('type', 'leaves');
                        cell.setAttribute('tool', 'axe');
                        break;
                    case 6:
                        cell.classList.add('sky');
                        cell.setAttribute('type', 'sky');
                        cell.setAttribute('tool', 'none');
                        break;
                    case 7:
                        cell.classList.add('cloud');
                        cell.setAttribute('type', 'cloud');
                        cell.setAttribute('tool', 'none');
                        break;
                    default:
                        throw new Error('NON RECOGNIZED NUMBER');
                        break;
                }
                this.view.appendChild(cell);
            }
        }
    };
    Controller.prototype.screenTileWasClicked = function (e) {
        var tool = e.target.getAttribute('tool');
        var type = e.target.getAttribute('type');
        if (this.model.getSelectedTool() === '') {
            //add tiles in the world
            if (this.model.getLastPickedTile()) {
                e.target.classList.remove('none');
                e.target.classList.add(this.model.getLastPickedTile());
                this.view.getLastPickedFrame().classList.remove(this.model.getLastPickedTile());
                this.model.updateLastPickedTile();
                if (this.model.getLastPickedTile())
                    this.view.getLastPickedFrame().classList.add(this.model.getLastPickedTile());
                else
                    this.view.getLastPickedFrame().classList.add('last-picked');
            }
        }
        else if (tool === this.model.getSelectedTool()) {
            //remove tiles in the world
            if (this.model.getLastPickedTile())
                this.view.getLastPickedFrame().classList.remove(this.model.getLastPickedTile());
            this.view.getLastPickedFrame().classList.add(e.target.getAttribute('class'));
            this.model.pushTiles(type);
            e.target.setAttribute('class', 'none');
        }
    };
    Controller.prototype.lastPickedFrameWasClicked = function (e) {
        this.model.setSelectedTool('');
        this.view.removeClassAxe('selected');
        this.view.removeClassShovel('selected');
        this.view.removeClassPickaxe('selected');
        this.view.removeClassLastPickedFrame('last-picked');
        this.view.addClassLastPickedFrame('last-picked-click');
    };
    Controller.prototype.btnRestWasClicked = function (e) {
        while (this.view.getScreenGameBoard().hasChildNodes())
            this.view.removeFirstChildScreenGameBoard();
        if (this.model.getLastPickedTile())
            this.view.removeClassLastPickedFrame(this.model.getLastPickedTile());
        this.view.removeClassPickaxe('selected');
        this.view.removeClassShovel('selected');
        this.view.removeClassAxe('selected');
        this.model.deleteAll();
        this.buildBoard();
    };
    Controller.prototype.axeWasClicked = function (e) {
        this.view.addClassLastPickedFrame('last-picked');
        this.view.removeClassLastPickedFrame('last-picked-click');
        this.view.removeClassPickaxe('selected');
        this.view.removeClassShovel('selected');
        this.view.addClassAxe('selected');
        this.model.setSelectedTool('axe');
    };
    Controller.prototype.shovelWasClicked = function (e) {
        this.view.addClassLastPickedFrame('last-picked');
        this.view.removeClassLastPickedFrame('last-picked-click');
        this.view.removeClassPickaxe('selected');
        this.view.removeClassAxe('selected');
        this.view.addClassShovel('selected');
        this.model.setSelectedTool('shovel');
    };
    Controller.prototype.pickaxeWasClicked = function (e) {
        this.view.addClassLastPickedFrame('last-picked');
        this.view.removeClassLastPickedFrame('last-picked-click');
        this.view.removeClassAxe('selected');
        this.view.removeClassShovel('selected');
        this.view.addClassPickaxe('selected');
        this.model.setSelectedTool('pickaxe');
    };
    return Controller;
}());
