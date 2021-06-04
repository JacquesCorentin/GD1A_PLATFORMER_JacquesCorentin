class Menu extends Phaser.Scene{

    constructor(){
        super("menu");
    }

    preload(){
        this.load.image('brick', ["assets/PNG/noir.png", "assets/PNG/noir1.jpg"]); // On vient charger 2 backgrounds pour les superposer afin de créerl effet d'ombre sur le reste du niveau
        this.load.spritesheet('Minori', "assets/PNG/essaie.png",{ frameWidth: 640, frameHeight: 390 }); // On vient charcher la spritesheet et lui définir sa grandeur de frame
        this.load.image('Projectile', "assets/PNG/Projectile.png"); // On vient charcher l'asset projectile
        this.load.tilemapTiledJSON('Map_1', 'assets/MAP/map_1.JSON'); // map en format JSON
        this.load.image('plateforme', 'assets/PNG/plateforme.png');  // assets utilisé pour la map dans tiled
    }


    create(){





        brick = this.add.sprite(0, 0, 'brick');
        brick.setOrigin(0.0);
        this.scene.start('Lvl1', {playerX: 352, playerY:288, maxSpeed:500}) // On charge la scène et le player mais on donne une position de base et une vitesse






        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Minori', { start: 6, end: 8 }),
            frameRate : 10,
            repeat : -1
        });
        

    
    }


}