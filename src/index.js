import Phaser from 'phaser';

import CityLoader from './Scenes/City/City.loader';
import City from './Scenes/City/City.main';


const config = {
  width:innerWidth,
  height:innerHeight,
  physics:{
    default:'arcade'
  },
  pixelArt:true,
  roundPixels: true,
  scene:[CityLoader,City]
}

const game = new Phaser.Game(config);