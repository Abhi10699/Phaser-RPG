import Phaser,{Scene} from 'phaser';
import Player from '../../Player/Player.main';

export default class City extends Scene{
  constructor(){
    super('cityScene');
  }
  preload(){
    this.load.spritesheet('player','./assets/player.png',{frameWidth:33.5,frameHeight:36})
    this.load.tilemapTiledJSON('world','./assets/Tilemaps/Map_test.json');
    this.load.image('tiles','./assets/world.png');
  }

  create(){
    this.movements = this.input.keyboard.createCursorKeys();

    // Tile maps
    this.map = this.make.tilemap({key:'world'});
    this.tileset = this.map.addTilesetImage("terrain_atlas","tiles");
    this.bgLayer = this.map.createStaticLayer("Background",this.tileset,0,0);
    this.flowersLayer = this.map.createStaticLayer("Tile Layer 2",this.tileset,0,0);

    this.bgLayer.setDepth(-1);
    
    // Load Player 
    this.player = new Player(this,100,100,'player');

    this.physics.world.enableBody(this.player);
    


    // TODO: Make a seperate class for animations

    // walk-up animations
    this.anims.create({
      key:'walk-up',
      frames:this.anims.generateFrameNumbers('player',{start:3,end:5}),
      frameRate:7,
      repeat:-1 // infinite 
    });
    this.cameras.main.startFollow(this.player)


    // walk down animation
    this.anims.create({
      key:'walk-down',
      frameRate:7,
      frames:this.anims.generateFrameNumbers('player',{start:25,end:27}),
      repeat:-1
    })

    // right animation

    this.anims.create({
      key:'walk-right',
      frameRate:7,
      frames:this.anims.generateFrameNumbers('player',{start:14,end:16})
    })

    // Walk - left 

    this.anims.create({
      key:'walk-left',
      frameRate:7,
      frames:this.anims.generateFrameNumbers('player',{start:36,end:38})
    })
    
  }

  update(){
    this.player.handleMovements();
  }
}