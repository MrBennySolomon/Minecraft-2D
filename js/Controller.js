'use strict';

class Controller {
  view;
  model;
  constructor (model, view) {
    this.view  = view;
    this.model = model;
  }

  buildBoard () {
    for (let i = 0; i < this.model.getBoardRows(); i++) {
      for (let j = 0; j < this.model.getBoardCols(); j++) {
        const cell = document.createElement('div');
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
            cell.setAttribute('tool', 'shovel');
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
  }

  screenTileWasClicked (e) {
    const tool = e.target.getAttribute('tool');
    const type = e.target.getAttribute('type');

    if (tool !== 'none' && tool === this.model.selectedTool) {
      this.model.pushTiles(type);
      this.view.lastPickedFrame.classList.remove(this.view.lastPickedFrame.getAttribute('class'));
      this.view.lastPickedFrame.classList.add(e.target.getAttribute('class'));
      e.target.setAttribute('class', 'none');
    }
  }

  lastPickedFrameWasClicked(e) {
    this.view.axe.classList.remove('selected');
    this.view.shovel.classList.remove('selected');
    this.view.pickaxe.classList.remove('selected');
    this.view.lastPickedFrame.classList.add('last-picked-click');

    const lastPickedTileType = this.model.getLastPickedTile();

  }

  btnRestWasClicked (e) {
    while (this.view.screenGameBoard.hasChildNodes()) {
      this.view.screenGameBoard.removeChild(this.view.screenGameBoard.firstChild);
    }
    this.model.deleteTiles()
    this.buildBoard();
  }

  axeWasClicked (e) {
    this.view.lastPickedFrame.classList.remove('last-picked-click');
    this.view.pickaxe.classList.remove('selected');
    this.view.shovel.classList.remove('selected');
    this.view.axe.classList.add('selected');
    this.model.setSelectedTool('axe');
  }

  shovelWasClicked (e) {
    this.view.lastPickedFrame.classList.remove('last-picked-click');
    this.view.pickaxe.classList.remove('selected');
    this.view.axe.classList.remove('selected');
    this.view.shovel.classList.add('selected');
    this.model.setSelectedTool('shovel');
  }

  pickaxeWasClicked (e) {
    this.view.lastPickedFrame.classList.remove('last-picked-click');
    this.view.axe.classList.remove('selected');
    this.view.shovel.classList.remove('selected');
    this.view.pickaxe.classList.add('selected');
    this.model.setSelectedTool('pickaxe');
  }
}