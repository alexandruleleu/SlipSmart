import {Snake} from './snake';

export class SlipSmart extends Phaser.State {

    snakes: any;

    preload() {
        this.game.load.image('circle','assets/circle.png');
    	this.game.load.image('background', 'assets/tile.png');
    }

    create() {
        var width = this.game.width;
        var height = this.game.height;

        this.game.world.setBounds(-width, -height, width*2, height*2);
    	this.game.stage.backgroundColor = '#444';

        //add tilesprite background
        var background = this.game.add.tileSprite(-width, -height,
            this.game.world.width, this.game.world.height, 'background');

        //initialize physics and groups
        this.game.physics.startSystem(Phaser.Physics.P2JS);

        this.snakes = [];

        //create player
        var snake = new Snake(this.game, 'circle', 0, 0);
        this.game.camera.follow(snake.head);
    }

    /**
     * Main update loop
     */
    update() {
        //update game components
        for (var i = this.snakes.length - 1 ; i >= 0 ; i--) {
            this.snakes[i].update();
        }
    }
}