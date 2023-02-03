'use strict';

const view       = new View();
const model      = new Model();
const controller = new Controller(model, view);

controller.buildBoard();

controller.view.screenGameBoard.addEventListener('click', function(e) {
  controller.screenTileWasClicked(e);
});
controller.view.lastPickedFrame.addEventListener('click', function(e) {
  controller.lastPickedFrameWasClicked(e);
});
controller.view.btnReset.addEventListener('click', function (e) {
  controller.btnRestWasClicked(e);
});
controller.view.axe.addEventListener('click', function(e) {
  controller.axeWasClicked(e);
});
controller.view.shovel.addEventListener('click', function(e) {
  controller.shovelWasClicked(e);
});
controller.view.pickaxe.addEventListener('click', function(e) {
  controller.pickaxeWasClicked(e);
});