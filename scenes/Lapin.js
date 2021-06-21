class Lapin extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image){
      super(scene, x, y, image);
  
      // 3.2 add to scene
  
      scene.add.existing(this);
      scene.lapin.add(this);
      this.play("lapin");  
    }
    movement(player){
    
    if ((player.y-this.y)<=10)
        {
          this.body.setVelocityY(-100);
        }
        if ((player.y-this.y)>=-10)
        {
          this.body.setVelocityY(100);
        }
  }
}