class Light extends Phaser.GameObjects.Sprite{

    constructor(scene){

    this.lights.addLight(400, 300, 120).setIntensity(2);

    this.lights.enable().setAmbientColor(0x008888);

    super(scene, x, y, "Light");


    }

update(){



}




}


