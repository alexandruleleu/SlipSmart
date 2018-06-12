import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material/material.module';
import { GameBoardComponent } from 'app/game/game-board/game-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameBoardComponent]
})
export class GameBoardModule { }
