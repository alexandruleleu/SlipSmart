import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from 'app/game/game.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', component: UserProfileComponent
  },
  {
    path: 'game-board', component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
