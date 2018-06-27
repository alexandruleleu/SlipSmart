import { Snake } from './snake';
import { Util } from './utils';


export class BotSnake extends Snake {
    
    trend: any;

    constructor(game: any, spriteKey: string, x: number, y: number) {
        super(game, spriteKey, x, y);
        this.trend = 1;
    }

    update() {
        this.head.body.setZeroRotation();
        
        if (Util.randomInt(1, 20) == 1) {
            this.trend *= -1;
        }

        this.head.body.rotateRight(this.trend * this.rotationSpeed);
        super.update();
    }

}