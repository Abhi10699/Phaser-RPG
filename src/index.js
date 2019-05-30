import Phaser from 'phaser';
import AnimationHandler from './AnimationHandler';

import City from './Scenes/City/City.main';
const config = {
  width:innerWidth,
  height:innerHeight,
  physics:{
    default:'arcade'
  },
  pixelArt:true,
  scene:[City]
}

const game = new Phaser.Game(config);
const animHandler = new AnimationHandler(game);

export default animHandler;