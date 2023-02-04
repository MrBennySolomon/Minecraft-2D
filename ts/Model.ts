
class Model {
  
  private tilesPicked:    Array<string>;
  private selectedTool:   string;
  private lastPickedTile: string;
  private readonly board: Array<Array<number>>;

  public constructor() {
    this.board          = JSON.parse(localStorage.getItem('board'));
    this.tilesPicked    = JSON.parse(localStorage.getItem('tilesPicked'));
    this.selectedTool   = JSON.parse(localStorage.getItem('selectedTool'));
    this.lastPickedTile = JSON.parse(localStorage.getItem('lastPickedTile'));
  }

  public getLastPickedTile() : string {
    return this.lastPickedTile;
  }

  public getTilesPicked () : Array<string> {
    return this.tilesPicked;
  }

  public getSelectedTool () :string {
    return this.selectedTool;
  }

  public setLastPickedTile(value: string) : void {
    this.lastPickedTile = value;
  }

  public setSelectedTool (tool: string) : void {
    this.selectedTool = tool;
  }

  public setTilesPicked (tiles: Array<string>) : void {
    this.tilesPicked = tiles;
  }

  public getBoardRows() : number {
    return this.board.length;
  }

  public getBoardCols() : number {
    return this.board[0].length;
  }

  public getBoardIndex (i: number, j: number) : number {
    return this.board[i][j];
  }

  public pushTiles(type: string) : void {
    this.tilesPicked.push(type);
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
    localStorage.setItem('lastPickedTile', JSON.stringify(this.tilesPicked[this.tilesPicked.length - 1]));
    this.lastPickedTile = type;
  }

  public deleteAll () : void{
    this.tilesPicked              = [];
    this.selectedTool             = '';
    this.lastPickedTile           = '';
    
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
    localStorage.setItem('selectedTool', JSON.stringify(this.selectedTool));
    localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
  }

  public updateLastPickedTile () : void {
    this.tilesPicked.pop();
    this.lastPickedTile = this.tilesPicked.length === 0 ? '' : this.tilesPicked[this.tilesPicked.length - 1];
    localStorage.setItem('tilesPicked', JSON.stringify(this.tilesPicked));
    localStorage.setItem('lastPickedTile', JSON.stringify(this.lastPickedTile));
  }
}
