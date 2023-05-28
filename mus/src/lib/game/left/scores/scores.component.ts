import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FloorPipe } from '../../../shared/floor.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    FloorPipe
  ],
  selector: 'mus-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {
  scores = [
    {players: ['player 1', 'player 4'], score: 26},
    {players: ['player 2', 'player 3'], score: 14}
  ];
}
