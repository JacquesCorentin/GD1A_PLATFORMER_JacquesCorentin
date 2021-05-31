class Control extends Phaser.Scene{

    constructor(){
        super("Control");
    }

    inputJoueur(cursors, inputP, pad, xAxis){
        //Input

        //le joueur appuie sur Espace(Clavier) ou sur A à la manette, il effectura une action définis
        inputP[2] = cursors.space.isDown || pad.A ? true : false;

        //le joueur appuie sur Droite(Clavier) ou pad Droite/stick vers la droite
        inputP[0] = cursors.right.isDown || pad.right || xAxis > 0.4 ? true: false;

        //le joueur appuie sur Gauche(Clavier) ou pad Gauche/stick vers la droite
        inputP[1] = cursors.left.isDown || pad.left || xAxis < -0.4 ? true: false;

        //le joueur appuie sur Espace(Clavier) ou sur A à la manette, il effectura une action définis
        inputP[3] = cursors.buttonX.isDown || pad.X ? true : false;

        return (inputP);
    }


    movementJ(inputP, player, playerSpeed, maxSpeed, fireDirection){
        //Logic
            playerSpeed = maxSpeed;
        if (inputP[0] && !inputP[3]){
            player.setVelocityX(playerSpeed);
            fireDirection[0] = true;
            fireDirection[1] = false;
        }
        
        if (inputP[1] && !inputP[3]){
            player.setVelocityX(-playerSpeed);
            fireDirection[0] = false;
            fireDirection[1] = true;
        }

        if (!inputP[0] && !inputP[1]){
            player.setVelocityX(0);
        }

        if (inputP[2]){
            player.setVelocityY(-playerSpeed);
        }

        if (inputP[3]){
            player.setVelocityX(0);
            player.setVelocityY(0);
        }

        return [player.body.velocity.x, player.body.velocity.y];
    }

    animation(player){

        if (attack){

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
            
        }

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
            return 'up'
        }
        

    }

    resetControl(cursors){
            cursors.left.isDown = false;
            cursors.right.isDown = false;
            cursors.up.isDown = false;
            cursors.down.isDown = false;
    }
}