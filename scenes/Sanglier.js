class Sanglier extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image){
      super(scene, x, y, image);
  
      // 3.2 add to scene
  
      scene.add.existing(this);
      scene.sanglier.add(this);

      this.play("Sanglier");  
  
    }
    movement(player){
       if ((player.x-this.x)<=10)
        {
          this.body.setVelocityX(-300);
        }
        if ((player.x-this.x)>=-10)
        {
          this.body.setVelocityX(300);
        }
    }
  }
