class Light extends Phaser.GameObjects.Sprite{

    constructor(scene){

    this.lights.addLight(400, 300, 450).setIntensity(150);

    this.lights.enable().setAmbientColor(0x008888);

    super(scene, x, y, "Light");


    }

update(){



}




}


