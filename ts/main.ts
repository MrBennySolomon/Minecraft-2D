
const view: View             = new View();
const model: Model           = new Model();
const controller: Controller = new Controller(model, view);

controller.buildBoard();

controller.getView().getScreenGameBoard().addEventListener('click', function(e) { controller.screenTileWasClicked(e) });
controller.getView().getLastPickedFrame().addEventListener('click', function(e) { controller.lastPickedFrameWasClicked(e) });
controller.getView().getBtnReset().addEventListener('click', function (e) { controller.btnRestWasClicked(e) });
controller.getView().getAxe().addEventListener('click', function(e) { controller.axeWasClicked(e) });
controller.getView().getShovel().addEventListener('click', function(e) { controller.shovelWasClicked(e) });
controller.getView().getPickaxe().addEventListener('click', function(e) { controller.pickaxeWasClicked(e) });