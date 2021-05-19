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
    this.control = this.scene.get('Control');
    

    this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
        'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
        'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
        'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
        'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
        'buttonX' : Phaser.Input.Keyboard.KeyCodes.X
    });

    this.control.resetControl(this.cursors);





    brick = this.add.sprite(0, 0, 'brick');
    brick.setOrigin(0.0);
    brick.setPipeline('Light2D');

    this.player = this.physics.add.sprite(400, 200, 'Minori');
    this.player.body.setSize(20,18);

    this.player.setCollideWorldBounds(true);



    light = this.lights.addLight(400, 300, 120).setIntensity(2);

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
