import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftComponent } from '../left/left.component';
import { MiddleComponent } from '../middle/middle.component';
import { RightComponent } from '../right/right.component';

@Component({
  standalone: true,
  imports: [
    MatSidenavModule,
    LeftComponent,
    MiddleComponent,
    RightComponent,
  ],
  selector: 'mus-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {}
