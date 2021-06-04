class Lvl1 extends Phaser.Scene {
    constructor( ) {
        super("Lvl1");
    } 

    init (data){
        
        this.maxSpeed = data.maxSpeed;
        this.playerSpeed = this.maxSpeed;
    
    }

    preload(){


    }

     create ()
{

    brick = this.add.sprite(0, 0, 'brick');



    const map = this.make.tilemap({ key: 'Map_1' }) // on charge la map 1 
    const tileset = map.addTilesetImage('assets_game','plateforme') // on charge les assets de la map utilisé dans Tilde

    

    map.createStaticLayer('sol', tileset) // on crée les assets grâce au JSON
    map.createStaticLayer('sol_2', tileset)
    map.createStaticLayer('ronces_2', tileset)
    map.createStaticLayer('ronces', tileset)
    map.createStaticLayer('decors_2', tileset) 
    map.createStaticLayer('decors', tileset)
    map.createStaticLayer('murs_2', tileset)
    map.createStaticLayer('murs_map_2', tileset)
    map.createStaticLayer('murs_map', tileset)
    map.createStaticLayer('murs', tileset)

    this.player = this.physics.add.sprite(400, 200, 'Minori');
    this.player.body.setSize(20,18);

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
        'buttonX' : Phaser.Input.Keyboard.KeyCodes.X
    });

    this.control.resetControl(this.cursors);





 
    brick.setOrigin(0.0);
    brick.setPipeline('Light2D');





    light = this.lights.addLight(400, 300, 250).setIntensity(2);

    this.lights.enable().setAmbientColor(0x008888);

    

}


    update(){
    

        light.x = this.player.x;
        light.y = this.player.y;


    let pad = Phaser.Input.Gamepad.Gamepad;
    
    if(this.input.gamepad.total){   //Si une manette est connecté
        pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
        xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
        yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }



     //Player's movement
        this.player.setVelocity(
            //X
            this.control.movementJ(this.control.inputJoueur(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.maxSpeed, fireDirection)[0],
            //Y
            this.control.movementJ(this.control.inputJoueur(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.maxSpeed, fireDirection)[1]);

        
            if (pad.X && fire==true && nbProjectile==true || this.cursors.buttonX.isDown && fire==true && nbProjectile==true)
            {
                this.shootBeam();
                nbProjectile=false;
                fire=false ;
                if (p>0)
                {
                    p = p - 1;
                }
            }
            if (this.cursors.buttonX.isUp && p>0 && recoveryProjectile == false ||!pad.X && p>0 && recoveryProjectile == false)
            {
                fire=true;
                nbProjectile=true;
                recoveryProjectile = true ;
            }
    
            if(recoveryProjectile == true){
                timerProj = timerProj + 1
                if(timerProj >= 50)
                {
                    recoveryProjectile = false
                    timerProj = 0
                }
            }

    }

    shootBeam(){
        var projectile = new Projectile(this);
    }
}