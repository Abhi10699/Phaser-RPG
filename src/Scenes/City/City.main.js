import Phaser,{Scene} from 'phaser';
import Player from '../../Player/Player.main';

export default class City extends Scene{
  constructor(){
    super('cityScene');
  }
  create(){
    this.movements = this.input.keyboard.createCursorKeys();
    
    // Tile maps
    this.map = this.make.tilemap({key:'world'});
    this.tileset = this.map.addTilesetImage("worldFix","tiles",32,32,1,2);
    this.bgLayer = this.map.createStaticLayer("Background",this.tileset,0,0);
   // this.farmLayer = this.map.createStaticLayer("FarmBlocks",this.tileset,0,0);
      // Load Player 

    this.player = new Player(this,200,200,'player');
    this.physics.world.enableBody(this.player);
    this.cameras.main.startFollow(this.player)

    this.cameras.main.setBounds(0,0,this.bgLayer.width * this.bgLayer.scaleX,this.bgLayer.height * this.bgLayer.scaleY);
  }

  update(){
    this.player.handleMovements();
  }
}