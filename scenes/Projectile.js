class Projectile extends Phaser.GameObjects.Sprite{

    constructor(scene){
    
    var x = scene.player.x -16;
    var y = scene.player.y;

    super(scene, x, y, "Projectile");

    // 3.2 add to scene
    scene.add.existing(this);

    // 3.3
    //this.play("Projectile_anim");
    scene.physics.world.enableBody(this); 
    this.body.velocity.x = - 250;
    this.body.setAllowGravity(false);

    if (firedirection[0]){
        this.body.velocity.x = 200;
    }
    else if (firedirection[1]){
        this.body.velocity.x = -200;
    }
 

  }


  update(){
    // 3.4 Frustum culling
    if(this.y < 32 ){
      this.destroy();
    }
  }
}