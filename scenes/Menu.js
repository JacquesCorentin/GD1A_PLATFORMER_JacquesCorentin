class Menu extends Phaser.Scene{

    constructor(){
        super("menu");
    }

    preload(){
        this.load.image('brick', ["assets/PNG/noir.png", "assets/PNG/map_1.png"]); // On vient charger 2 backgrounds pour les superposer afin de créerl effet d'ombre sur le reste du niveau
        this.load.spritesheet("Minori","assets/PNG/Minori.png", { frameWidth: 360 , frameHeight: 195 }); // On vient charger la spritesheet et lui définir sa grandeur de frame
        this.load.image('Minori_assis', "assets/PNG/Minori_assis.png");
        this.load.spritesheet('Projectile', "assets/PNG/Projectile.png", { frameWidth: 64 , frameHeight: 64 }); // On vient charger le sprite du projectile
        this.load.tilemapTiledJSON('Map_1', 'assets/MAP/niveau1.json'); // map en format JSON
        this.load.image('plateforme', 'assets/PNG/plateforme.png');  // assets utilisé pour la map dans tiled
        this.load.spritesheet("barreDeVie", "assets/PNG/vie.png", { frameWidth: 486 , frameHeight: 150.75 }); // on charge ici l'asset de vie 
        this.load.image('titre', 'assets/PNG/Titre.png');  // Chargement de l'ecran titre 
        this.load.spritesheet('perles', "assets/PNG/perles_de_lumiere.png", { frameWidth: 250 , frameHeight: 95 }); // On charge l'asset des perles de lumière
        this.load.spritesheet('perlesLoot', "assets/PNG/perles.png", { frameWidth: 70 , frameHeight: 80 });  // Chargement de l'ecran titre
        this.load.image('bgcontrol', 'assets/PNG/control.png');  // Chargement de l'ecran de controle pour le début du jeu
        this.load.spritesheet('timerShiny', "assets/PNG/timer_shiny.png", { frameWidth: 84.6 , frameHeight: 80 });
        this.load.spritesheet('timerProjectile', "assets/PNG/timer_projectile.png", { frameWidth: 84.6 , frameHeight: 80 });
    }


    create(){


    bg = this.add.image(0,0, 'titre').setOrigin(0,0);

    

    this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
        'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
        'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
        'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
        'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
        'buttonX' : Phaser.Input.Keyboard.KeyCodes.X
    });
        
        


        // Perles animations

        this.anims.create({
            key: 'perlesLoot',
            frames: this.anims.generateFrameNumbers('perlesLoot', { start: 0, end: 5 }),
            frameRate : 10,
            repeat : -1
        });


        this.anims.create({
            key: 'perles_0',
            frames: [ {key : 'perles_de_lumiere', frame:0}],
            frameRate : 10,
            repeat : -1
        });


        this.anims.create({
            key: 'perles_1',
            frames: [ {key : 'perles_de_lumiere', frame:1}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'perles_2',
            frames: [ {key : 'perles_de_lumiere', frame:2}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'perles_3',
            frames: [ {key : 'perles_de_lumiere', frame:3}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'perles_4',
            frames: [ {key : 'perles_de_lumiere', frame:4}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'perles_5',
            frames: [ {key : 'perles_de_lumiere', frame:5}],
            frameRate : 10,
            repeat : -1
        });


        // Player animations 

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Minori', { start: 0, end: 2 }),
            frameRate : 10,
            repeat : -1
        });
        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Minori', { start: 3, end: 5 }),
            frameRate : 10,
            repeat : -1
        });



        this.anims.create({
            key: 'fix',
            frames: this.anims.generateFrameNumbers('Minori', { start: 9, end: 11 }),
            frameRate : 10,
           repeat : -1
        });

        this.anims.create({
            key: 'fixG',
            frames: this.anims.generateFrameNumbers('Minori', { start: 6, end: 8 }),
            frameRate : 10,
           repeat : -1
        });

   
        
         //Vie animations 
        this.anims.create({
            key: 'vie_3/3',
            frames: [ {key : 'barreDeVie', frame:0}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'vie_2/3',
            frames: [ {key : 'barreDeVie', frame:1}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'vie_1/3',
            frames: [ {key : 'barreDeVie', frame:2}],
            frameRate : 10,
            repeat : -1
        });

        this.anims.create({
            key: 'vie_0/3',
            frames: [ {key : 'barreDeVie', frame:3}],
            frameRate : 10,
            repeat : -1
        });


    // Projectile animations 
    this.anims.create({
        key: 'leftD',
        frames: this.anims.generateFrameNumbers('Projectile', { start: 0, end: 3 }),
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'leftG',
        frames: this.anims.generateFrameNumbers('Projectile', { start: 4, end: 6 }),
        frameRate : 10,
        repeat : -1
    });

        //timer projectile

    this.anims.create({
        key: 'time_0',
        frames: [ {key : 'timerProjectile', frame:0}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time_1',
        frames: [ {key : 'timerProjectile', frame:1}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time_2',
        frames: [ {key : 'timerProjectile', frame:2}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time_3',
        frames: [ {key : 'timerProjectile', frame:3}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time_4',
        frames: [ {key : 'timerProjectile', frame:4}],
        frameRate : 10,
        repeat : -1
    });


    //timer compétence

    this.anims.create({
        key: 'time0',
        frames: [ {key : 'timerShiny', frame:0}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time1',
        frames: [ {key : 'timerShiny', frame:1}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time2',
        frames: [ {key : 'timerShiny', frame:2}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time3',
        frames: [ {key : 'timerShiny', frame:3}],
        frameRate : 10,
        repeat : -1
    });

    this.anims.create({
        key: 'time4',
        frames: [ {key : 'timerShiny', frame:4}],
        frameRate : 10,
        repeat : -1
    });
    
    }
    update() {

    let pad = Phaser.Input.Gamepad.Gamepad;
    
    if(this.input.gamepad.total){   //Si une manette est connecté
        pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
        xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
        yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }


    if (this.cursors.buttonX.isDown || pad.X ){
            this.scene.start('Lvl1', {playerX: 352, playerY:288, maxSpeed:500}) // On charge la scène et le player mais on donne une position de base et une vitesse
        }

    }


}