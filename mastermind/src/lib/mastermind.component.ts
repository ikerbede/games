import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { ColorUtils } from './color.utils';
import { Attempt } from './models/attempt.model';
import { Color } from './models/color.enum';

const NB_SECRET_COLORS = 4;

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  selector: 'ib-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.scss']
})
export class MastermindComponent implements OnInit {
  readonly palette: readonly Color[] = ColorUtils.getPalette();
  secretColors: readonly Color[] = [];
  attempts: Attempt[] = [];
  currentAttempt: Attempt = new Attempt();
  displaySecret = false;

  ngOnInit() {
    this.secretColors = ColorUtils.getRandomColors(NB_SECRET_COLORS);
  }

  pickUpColor(color: Color): void {
    if (this.currentAttempt.colors.length < NB_SECRET_COLORS) {
      this.currentAttempt.colors.push(color);
    }
    if (this.currentAttempt.colors.length === NB_SECRET_COLORS) {
      this.currentAttempt.setRedsAndWhites(this.secretColors);
      this.attempts.push({...this.currentAttempt} as Attempt);
      this.currentAttempt = new Attempt();
    }
  }

  gameOver(): void {
    this.displaySecret = true;
  }

  restart(): void {
    this.attempts = [];
    this.displaySecret = false;
    this.secretColors = ColorUtils.getRandomColors(NB_SECRET_COLORS);
  }
}
