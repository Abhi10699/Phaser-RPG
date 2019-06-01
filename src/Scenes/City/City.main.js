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
    this.tileset = this.map.addTilesetImage("terrain_atlas","tiles",32,32,0,0);
    this.bgLayer = this.map.createStaticLayer("Background",this.tileset,0,0);
    this.flowersLayer = this.map.createStaticLayer("Tile Layer 2",this.tileset,0,0);

    // this.bgLayer.setDepth(-1);
    
    // Load Player 

    this.player = new Player(this,100,100,'player');
    this.physics.world.enableBody(this.player);
    // this.cameras.main.startFollow(this.player)


    // this.cameras.main.setBounds(0,0,this.cameras.main.width + this.tileset.tileWidth + this.player.x,this.cameras.main.height + this.tileset.tileHeight + this.player.y)
    
  }

  update(){
    this.player.handleMovements();
  }
}