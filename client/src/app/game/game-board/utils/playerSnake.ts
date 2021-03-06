import { Snake } from "./snake";


export class PlayerSnake extends Snake {

    cursors: any;
    spaceKey: any;

    constructor(game: any, spriteKey: string, x: number, y: number) {
        super(game, spriteKey, x, y);
        this.cursors = game.input.keyboard.createCursorKeys();

         //handle the space key so that the player's snake can speed up
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceKey.onDown.add(this.spaceKeyDown, this);
        this.spaceKey.onUp.add(this.spaceKeyUp, this);
        this.addDestroyedCallback(function() {
            this.spaceKey.onDown.remove(this.spaceKeyDown, this);
            this.spaceKey.onUp.remove(this.spaceKeyUp, this);
        }, this);
    }

    spaceKeyDown() {
        this.speed = this.fastSpeed;
    }
    
    spaceKeyUp() {
        this.speed = this.slowSpeed;
    }

    update() {
        //find the angle that the head needs to rotate, through in order to face the mouse
        let mousePosX = this.game.input.activePointer.worldX;
        let mousePosY = this.game.input.activePointer.worldY;
        let headX = this.head.body.x;
        let headY = this.head.body.y;
        let angle = (180*Math.atan2(mousePosX-headX,mousePosY-headY)/Math.PI);
        if (angle > 0) {
            angle = 180-angle;
        }
        else {
            angle = -180-angle;
        }
        let dif = this.head.body.angle - angle;
        this.head.body.setZeroRotation();
        //allow arrow keys to be used
        if (this.cursors.left.isDown) {
            this.head.body.rotateLeft(this.rotationSpeed);
        }
        else if (this.cursors.right.isDown) {
            this.head.body.rotateRight(this.rotationSpeed);
        }
        //decide whether rotating left or right will angle the head towards
        //the mouse faster, if arrow keys are not used
        else if (dif < 0 && dif > -180 || dif > 180) {
            this.head.body.rotateRight(this.rotationSpeed);
        }
        else if (dif > 0 && dif < 180 || dif < -180) {
            this.head.body.rotateLeft(this.rotationSpeed);
        }

        //call the original snake update method
        super.update();
    }
}