class Menu extends Phaser.Scene{

    constructor(){
        super("menu");
    }

    preload(){
        this.load.image('brick', ["assets/PNG/noir.png", "assets/PNG/noir1.jpg"]); // On vient charger 2 backgrounds pour les superposer afin de créerl effet d'ombre sur le reste du niveau
        this.load.spritesheet('Minori', "assets/PNG/Minori.png",{ frameWidth: 32, frameHeight: 32 }); // On vient charcher la spritesheet et lui définir sa grandeur de frame
        
    }


    create(){
        brick = this.add.sprite(0, 0, 'brick');
        brick.setOrigin(0.0);
        this.scene.start('Lvl1', {playerX: 352, playerY:288, maxSpeed:250}) // On charge la scène et le player mais on donne une position de base et une vitesse





        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Minori', { start: 6, end: 8 }),
            frameRate : 10,
            repeat : -1
        });    
    
    }


}