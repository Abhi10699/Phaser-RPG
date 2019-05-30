import Phaser from 'phaser';

export default class AnimationHandler extends Phaser.Animations.AnimationManager{
  constructor(game){
    super(game);
    console.log("Initialised animation manager")
  }
}
