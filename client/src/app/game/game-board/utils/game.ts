import {Snake} from './snake';
import { BotSnake } from './botSnake';
import { PlayerSnake } from './playerSnake';

export class SlipSmartGame {

    game: any;
    snakes: any;

    constructor(game: any) {
        this.game = game;
        this.snakes = [];
    }

    preload() {
        this.game.load.image('circle','assets/circle.png');
    	this.game.load.image('background', 'assets/tile.png');
    }

    create() {
        console.log(this.game);
        let width = this.game.width;
        let height = this.game.height;
        this.game.world.setBounds(-width, -height, width*2, height*2);
    	this.game.stage.backgroundColor = '#444';

        //add tilesprite background
        let background = this.game.add.tileSprite(-width, -height, this.game.world.width, this.game.world.height, 'background');

        //initialize physics and groups
        this.game.physics.startSystem(Phaser.Physics.P2JS);

        //create player
        var snake = new PlayerSnake(this, 'circle', 0, 0);
        this.game.camera.follow(snake.head);

        new BotSnake(this, 'circle', -200, 0);
        new BotSnake(this, 'circle', 200, 0);
    }

    /**
     * Main update loop - update each player(snake) !!!
     */
    update() {
        //update game components
        for (var i = this.snakes.length - 1 ; i >= 0 ; i--) {
            this.snakes[i].update();
        }
    }
}