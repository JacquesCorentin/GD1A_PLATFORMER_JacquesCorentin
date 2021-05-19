class Projectile extends Phaser.GameObjects.Sprite{

    constructor(scene){
    
    var x = scene.player.x;
    var y = scene.player.y - 16;

    super(scene, x, y, "Projectile");

    // 3.2 add to scene
    scene.add.existing(this);

    // 3.3
    //this.play("Projectile_anim");
    scene.physics.world.enableBody(this); 
    this.body.velocity.y = - 250;

    // 4.2 add the beam to the projectiles group
    //scene.projectiles.add(this);

  }


  update(){
    // 3.4 Frustum culling
    if(this.y < 32 ){
      this.destroy();
    }
  }
}