import { Component, OnInit } from '@angular/core';
import { Game, AUTO } from 'phaser-ce';
import { SlipSmartGame } from './utils/game'; 

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  game: Game;

  constructor() {
    
  }

  ngOnInit() {
    this.game = new Game(996, 669, AUTO, 'game-board');
    this.game.state.add('SlipSmartGame', new SlipSmartGame(this.game));
    this.game.state.start('SlipSmartGame');
  }

}
