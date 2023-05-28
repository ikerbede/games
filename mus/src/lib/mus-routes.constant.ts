import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { GameComponent } from "./game/game/game.component";
import { MusComponent } from "./mus.component";

export const MUS_ROUTES: Routes = [
  {
    path: '',
    component: MusComponent,
    children: [
      { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: '',   redirectTo: 'game', pathMatch: 'full' }
    ]
  }
];
