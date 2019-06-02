import Phaser,{GameObjects,Animations} from 'phaser';
import AnimManager from '../index';


export default class Player extends GameObjects.Sprite{
  constructor(scene,x,y,key){
    super(scene,x,y,key);
    this.setFrame(3);
    this.setScale(1.5,1.5);
    
    this.movementHandler = scene.input.keyboard.createCursorKeys();
    this.movementSpeed = 110;

    scene.add.displayList.add(this);
    scene.add.updateList.add(this);
  }

  handleMovements(){
    const dir = new Phaser.Math.Vector2();
    if(this.movementHandler.up.isDown){
      dir.y = -1;
      this.anims.play('walk-up',true);
    }

    else if(this.movementHandler.down.isDown){
      dir.y = 1;
      this.anims.play('walk-down',true);
    }
    else if(this.movementHandler.left.isDown){
      dir.x = -1;
      this.anims.play('walk-left',true);
      
    }
    else if(this.movementHandler.right.isDown){
      dir.x = 1;
      this.anims.play('walk-right',true);

    }

    else{
      dir.set(0,0);
      this.anims.stop();
    }

    this.body.setVelocity(Math.floor(dir.x * this.movementSpeed),Math.floor(dir.y * this.movementSpeed));
  }
  
}