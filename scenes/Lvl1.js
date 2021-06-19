class Lvl1 extends Phaser.Scene {
    constructor( ) {
        super("Lvl1");
    } 

    init (data){
        
        this.speed = data.maxSpeed;
        this.playerSpeed = this.speed;
    
    }

    preload(){


    
    }

     create ()
{


// Cration de la carte
    const map = this.make.tilemap({ key: 'Map_1' }) // on charge la map 1 
    const tileset = map.addTilesetImage('assets_game','plateforme', 64,64) // on charge les assets de la map utilisé dans Tilde

    
// génération des assets tildes
    const arbres = map.createStaticLayer('arbres', tileset) 
    const arbres_2 = map.createStaticLayer('arbres_2', tileset) 
    const sol = map.createStaticLayer('sol', tileset) // on crée les assets grâce au JSON
    const sol_2 = map.createStaticLayer('sol_2', tileset)
    const ronces_2 = map.createStaticLayer('ronces_2', tileset)
    const ronces = map.createStaticLayer('ronces', tileset)
    const decors_2 = map.createStaticLayer('decors_2', tileset) 
    const decors = map.createStaticLayer('decors', tileset)
    const murs_2 = map.createStaticLayer('murs_2', tileset)
    const murs_map_2 =map.createStaticLayer('murs_map_2', tileset)
    const murs_map = map.createStaticLayer('murs_map', tileset)
    const murs = map.createStaticLayer('murs', tileset)


// collides des plateformes
    sol.setCollisionByProperty({collides: true })
    sol_2.setCollisionByProperty({collides: true })
    murs.setCollisionByProperty({collides: true })
    murs_2.setCollisionByProperty({collides: true })
    murs_map.setCollisionByProperty({collides: true })
    murs_map_2.setCollisionByProperty({collides: true })
    ronces.setCollisionByProperty({collides: true })


    /*const debugGraphics = this.add.graphics().setAlpha(0.7)
        sol.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        sol_2.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        murs.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        murs_2.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        murs_map.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        murs_map_2.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })*/


    //brick = this.add.image(0, 0, 'brick');
    
    player = this.player = this.physics.add.sprite(2150, 1295, 'Minori');
    this.player.setSize(160, 138).setOffset(130,8);


    this.player.setCollideWorldBounds(true);
    

     // Physiques player //
    
    this.player.setBounce(0.0);
    this.physics.world.setBounds(0, 0, 22400, 9600);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, 22400, 9600);
    //this.cameras.main.setZoom(-1);

    this.control = this.scene.get('Control');
    

    this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
        'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
        'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
        'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
        'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
        'buttonX' : Phaser.Input.Keyboard.KeyCodes.X,
        'buttonH' : Phaser.Input.Keyboard.KeyCodes.H,
        'buttonS' : Phaser.Input.Keyboard.KeyCodes.S,
    });

    this.control.resetControl(this.cursors);



 
    //brick.setOrigin(0.0);
    //brick.setPipeline('Light2D');
    brick = this.add.tileSprite(400, 300, 800, 600, 'brick').setPipeline('Light2D');





    
    

    this.lights.enable().setAmbientColor(0x008888);

// collider

    this.physics.add.collider(this.player,sol, resetJump);
    this.physics.add.collider(this.player,sol_2, resetJump);
    this.physics.add.collider(this.player,murs, resetJump);
    this.physics.add.collider(this.player,murs_2, resetJump);
    this.physics.add.collider(this.player,murs_map);
    this.physics.add.collider(this.player,murs_map_2);
    this.physics.add.collider(this.player,ronces, hitEnnemis );
    this.physics.add.collider(this.player,perles, collectPerles );


    // Vie //
    barreDeVie = this.physics.add.sprite(0, 0, 'barreDeVie').setOrigin(0,0);
    barreDeVie.body.setAllowGravity(false),
    barreDeVie.setScrollFactor(0,0)  

    // Ressources //
    ressources = this.physics.add.sprite(1100,0, 'perles').setOrigin(0,0);
    ressources.body.setAllowGravity(false),
    ressources.setScrollFactor(0,0)

    // Perles recoltable //
    perles = this.physics.add.sprite(800,0, 'perlesLoot').setOrigin(0,0);
    perles.body.setAllowGravity(true)

    

    // Timer projectile
    proj = this.physics.add.sprite(1100, 370,'timerProjectile').setOrigin(0,0);
    proj.body.setAllowGravity(false),
    proj.setScrollFactor(0,0)

    // Timer projectile
    projC = this.physics.add.sprite(1000, 370,'timerShiny').setOrigin(0,0);
    projC.body.setAllowGravity(false),
    projC.setScrollFactor(0,0)

    this.bgcontrol = this.add.image(1750,1060, "bgcontrol").setOrigin(0,0);

    

}


    update(){

    let pad = Phaser.Input.Gamepad.Gamepad;
    
    if(this.input.gamepad.total){   //Si une manette est connecté
        pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
        xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
        yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }


    if (start == true){

        if (this.cursors.buttonS.isDown == true || pad.B ){
            start = false;
            this.bgcontrol.setVisible(false);
        }

    }
    if (start == false){
    
    light = this.lights.addLight(400, 300, 280).setIntensity(3);

    
    if (this.cursors.buttonS.isDown == true && recoveryShiny == false || pad.B && recoveryShiny == false ){
        projC.anims.play('time4', true);
        radius = 4000;
        recoveryShiny = true;
    }
    
    // perles animation //
   perles.anims.play('perlesLoot', true);

    if (gameOver)
    {   
        this.player.anims.play('fix');
        this.physics.pause();
        this.scene.start('Game_Over');
        return;
    } 

    // Barre de vie

    if(invincible == true){
        timerInvincible = timerInvincible + 1
        if(timerInvincible >= 500){
            invincible = false
            timerInvincible = 0
        }
    }


    if (perles1 == 0){
        perle.anims.play("perles_0",true);
    }
    if (compteur == true){
        perles1 = perles1 + 1
        if (perles1 > 5){
            perles1 = 5
        }
        if ( perles1 == 1){
            perle.anims.play('perles_1');
        }
        if ( perles1 == 2){
            perle.anims.play('perles_2');
        }

        if ( perles1 == 3){
            perle.anims.play('perles_3');
        }
    
        if ( perles1 == 4){
            perle.anims.play('perles_4');
        }

        if ( perles1 == 5){
            perle.anims.play('perles_5');
        }
        compteur = false;
    }
        

        light.x = this.player.x;
        light.y = this.player.y;


    
   
    
   
    toucheSol = this.control.move(this.control.inputJoueur(this.cursors, inputP, pad, xAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[2];
    doubleSaut = this.control.move(this.control.inputJoueur(this.cursors, inputP, pad, xAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[3];
    doubleSautActif = this.control.move(this.control.inputJoueur(this.cursors, inputP, pad, xAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[4];

    this.player.setVelocity(
        //X
        this.control.move(this.control.inputJoueur(this.cursors, inputP, pad, xAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[0],
        //Y
        this.control.move(this.control.inputJoueur(this.cursors, inputP, pad, xAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[1]);

            if(this.player.body.velocity.x != 0 || this.player.body.velocity.y != 0){
               if(this.player.body.velocity.x < 0)
               {
                   this.player.anims.play("left",true);
                   this.player.setSize(160, 110).setOffset(50,38);
               }
               if(this.player.body.velocity.x > 0)
               {
                   this.player.anims.play("right",true);
                   this.player.setSize(160, 110).setOffset(130,38);
               }
        
            }
            if(this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0 && toucheSol == true )
            {
                if ( firedirection[0] == true){
                    this.player.anims.play("fix",true);
                    this.player.setSize(160, 138).setOffset(130,8);
                }

                if ( firedirection[1] == true){
                    this.player.anims.play("fixG",true);
                    this.player.setSize(160, 138).setOffset(80,8);
                }
            }
            if ( p == 0){
                proj.anims.play('time_4', true);
            }
            if (pad.X   && recoveryProjectile == false && p>0 || this.cursors.buttonX.isDown  && recoveryProjectile == false && p>0)
            {
                this.shootBeam();
                proj.anims.play('time_4', true);
                nbProjectile=false;
                fire=false ;
                if (p>0)
                {
                    p = p - 1;
                }
                fire=true;
                nbProjectile=true;
                recoveryProjectile = true ;
            }
            
            
            if(recoveryProjectile == true && p > 0){
                timerProj = timerProj + 1
                if (timerProj >= 15 && timerProj < 30){
                    proj.anims.play('time_3', true);
                }
                if (timerProj >= 30 && timerProj < 45){
                    proj.anims.play('time_2', true);
                }
                if (timerProj >= 45 && timerProj < 60){
                    proj.anims.play('time_1', true);
                }
                if(timerProj >= 60)
                {
                    proj.anims.play('time_0', true);
                    recoveryProjectile = false
                    timerProj = 0
                }
            }

            if(recoveryShiny == true ){
                timerShiny = timerShiny + 1
                if (timerShiny >= 60 && timerShiny < 120){
                    projC.anims.play('time3', true);
                }
                if (timerShiny >= 120 && timerShiny < 180){
                    projC.anims.play('time2', true);
                }
                if (timerShiny >= 180 && timerShiny < 240){
                    projC.anims.play('time1', true);
                }
                if(timerShiny >= 240)
                {
                    projC.anims.play('time0', true);
                    recoveryShiny = false
                    radius = 250
                    timerShiny = 0
                }
            }
    }

    }

    shootBeam(){
        var projectile = new Projectile(this);
    }

    
}

function hitEnnemis ()
{
    toucheEnnemis = true ;
    if (vieJoueur > 0 && invincible == false)
    {
        vieJoueur = vieJoueur -1;
        
    if (vieJoueur == 3){
        barreDeVie.anims.play('vie_3/3');
    
    }
    
    if (vieJoueur == 2){
        barreDeVie.anims.play('vie_2/3');
    }
    
    if (vieJoueur ==1){
        barreDeVie.anims.play('vie_1/3');
    }
    
    if (vieJoueur == 0){
        barreDeVie.anims.play('vie_0/3');
        player.setTint(0xff0000);
        gameOver = true;
    }
    }
    invincible = true;
}

function resetJump() {
    if ( player.body.onFloor() || player.body.onWall())
    {
        toucheSol=true;
        doubleSaut=false;
    }
    }

 // Fonction collectible :
    
 function collectPerles(){
    perle.disableBody(true,true);
    compteur = true;
}
