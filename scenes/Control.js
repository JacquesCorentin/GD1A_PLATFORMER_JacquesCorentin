class Control extends Phaser.Scene{

    constructor(){
        super("Control");
    }

    inputJoueur(cursors, inputP, pad, xAxis){
        //Input

        //le joueur appuie sur Espace(Clavier) ou sur A à la manette, il effectura une action définis
        inputP[2] = cursors.space.isDown || pad.A ? true : false;

        inputP[4] = cursors.buttonH.isDown || pad.O ? true : false;

        //le joueur appuie sur Droite(Clavier) ou pad Droite/stick vers la droite
        inputP[0] = cursors.right.isDown || pad.right || xAxis > 0.4 ? true: false;

        //le joueur appuie sur Gauche(Clavier) ou pad Gauche/stick vers la droite
        inputP[1] = cursors.left.isDown || pad.left || xAxis < -0.4 ? true: false;

        //le joueur appuie sur Espace(Clavier) ou sur A à la manette, il effectura une action définis
        inputP[3] = cursors.buttonX.isDown || pad.X ? true : false;

        //le joueur appuie sur Espace(Clavier) ou sur A à la manette, il effectura une action définis
        inputP[5] = cursors.buttonS.isDown || pad.B ? true : false;
        

        return (inputP);
    }


    move(inputP, player, playerSpeed, speed ,toucheSol,firedirection,doubleSaut,doubleSautActif){
        playerSpeed = speed;


        if (inputP[0]){
            player.setVelocityX(playerSpeed);
            firedirection[0]=true;
            firedirection[1]=false;
        }

        if (inputP[1]){
            player.setVelocityX(-playerSpeed);
            firedirection[0]=false;
            firedirection[1]=true;
        }

        if (!inputP[0] && !inputP[1]){
            player.setVelocityX(0);
        }

        if (inputP[0] && inputP[1]){
            player.setVelocityX(0);
        }

        if (inputP[2]  && toucheSol==true){
            player.setVelocityY(-490);
            toucheSol=false;
        }

        if (!inputP[2] && toucheSol==false && doubleSaut==false)
        {
            doubleSautActif=true;
        }

        if (inputP[2] && doubleSautActif==true)
        {
            player.setVelocityY(-480);
            doubleSautActif = false;
            doubleSaut = true;
        }

        return [player.body.velocity.x, player.body.velocity.y,toucheSol,doubleSaut,doubleSautActif];
    }

    animation(player){

       /* if (attack){

            if(direction == 'down'){
                return 'downAttack';
            }

            if(direction == 'up'){
                return 'upAttack'; 
            }

            if(direction == 'left'){
                return 'leftAttack';
            }

            if(direction == 'right'){
                return 'rightAttack';
            }
            
        }*/

        if (player.body.velocity.x > 0){
            return 'right'
        }

        if (player.body.velocity.x < 0){
            return 'left'
        }

        if (player.body.velocity.y > 0){
            return 'down'
        }

        if (player.body.velocity.y < 0){
            return 'space'
        }
        

    }

    resetControl(cursors){
            cursors.left.isDown = false;
            cursors.right.isDown = false;
            //cursors.up.isDown = false;
            //cursors.down.isDown = false;
    }
}