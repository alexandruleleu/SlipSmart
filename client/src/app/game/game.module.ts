import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { GameComponent } from './game.component';
import { ChatComponent } from './chat/chat.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SocketService } from './chat/shared/services/socket.service';
import { DialogUserComponent } from './chat/dialog-user/dialog-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [GameComponent, ChatComponent, DialogUserComponent, GameBoardComponent],
  providers: [SocketService],
  entryComponents: [DialogUserComponent]
})

export class GameModule { }
