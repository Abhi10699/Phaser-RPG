import Phaser,{ Scene } from 'phaser';

export default class CityAssetLoader extends Scene{
  constructor(){
    super("CityAssetLoader");
  }

  preload(){
    this.load.spritesheet('player','./assets/player.png',{frameWidth:33.5,frameHeight:36})
    this.load.tilemapTiledJSON('world','./assets/Tilemaps/newMap.json');
    this.load.image('tiles','./assets/worldFix.png');
  }
  create(){
    this.anims.create({
      key:'walk-up',
      frames:this.anims.generateFrameNumbers('player',{start:3,end:5}),
      frameRate:7,
      repeat:-1 // infinite 
    });
    

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

    this.scene.start("cityScene")
  }
}