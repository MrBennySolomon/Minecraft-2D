
class View {
  private          screenGameBoard: HTMLDivElement;
  private readonly axe:             HTMLDivElement;
  private readonly shovel:          HTMLDivElement;
  private readonly pickaxe:         HTMLDivElement;
  private readonly btnReset:        HTMLButtonElement;
  private readonly lastPickedFrame: HTMLDivElement;
  
  public constructor () {
    this.axe             = document.querySelector('.axe')                   as HTMLDivElement;
    this.shovel          = document.querySelector('.shovel')                as HTMLDivElement;
    this.pickaxe         = document.querySelector('.pickaxe')               as HTMLDivElement;
    this.btnReset        = document.getElementById('reset')                 as HTMLButtonElement;
    this.lastPickedFrame = document.querySelector('.last-picked')           as HTMLDivElement;
    this.screenGameBoard = document.querySelector('body .game #game-board') as HTMLDivElement;
  }

  public getLastPickedFrame() : HTMLDivElement {
    return this.lastPickedFrame;
  }

  public getAxe() : HTMLDivElement {
    return this.axe;
  }
  
  public getShovel() : HTMLDivElement {
    return this.shovel;
  }

  public getPickaxe() : HTMLDivElement {
    return this.pickaxe;
  }

  public getBtnReset() : HTMLButtonElement {
    return this.btnReset;
  }

  public getScreenGameBoard() : HTMLDivElement {
    return this.screenGameBoard;
  }

  public appendChild (cell: HTMLDivElement) {
    this.screenGameBoard.appendChild(cell);
  }

  public removeClassAxe(str: string): void {
    this.axe.classList.remove(str);
  }

  public removeClassPickaxe(str: string): void {
    this.pickaxe.classList.remove(str);
  }

  public removeClassShovel(str: string): void {
    this.shovel.classList.remove(str);
  }

  public removeClassLastPickedFrame(str: string): void {
    this.lastPickedFrame.classList.remove(str);
  }

  public addClassAxe(str: string): void {
    this.axe.classList.add(str);
  }

  public addClassPickaxe(str: string): void {
    this.pickaxe.classList.add(str);
  }

  public addClassShovel(str: string): void {
    this.shovel.classList.add(str);
  }

  public addClassLastPickedFrame(str: string): void {
    this.lastPickedFrame.classList.add(str);
  }

  public removeFirstChildScreenGameBoard() : void {
    this.screenGameBoard.removeChild(this.screenGameBoard.firstChild);
  }
}