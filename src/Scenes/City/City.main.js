import Phaser,{Scene} from 'phaser';
import Player from '../../Player/Player.main';

export default class City extends Scene{
  constructor(){
    super('cityScene');
  }
  preload(){
    this.load.spritesheet('player','./assets/player.png',{frameWidth:33.5,frameHeight:36})
    
  }

  create(){
    this.player = new Player(this,100,100,'player');

    this.physics.world.enableBody(this.player);
    
    this.movements = this.input.keyboard.createCursorKeys();

    // this.cameras.main.startFollow(this.player)

  }

  update(){
    this.player.handleMovements();
  }
}