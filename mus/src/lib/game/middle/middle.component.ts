import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HandComponent } from './hand/hand.component';
import { PlayerComponent } from './player/player.component';

@Component({
  standalone: true,
  imports: [
    MatGridListModule,
    HandComponent,
    PlayerComponent
  ],
  selector: 'mus-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent {
  players = [
    {name: 'player 1', isEsku: false},
    {name: 'player 2', isEsku: true},
    {name: 'player 3', isEsku: false},
    {name: 'player 4', isEsku: false},
  ];
}
