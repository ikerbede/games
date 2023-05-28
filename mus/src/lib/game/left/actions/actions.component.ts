import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    MatToolbarModule,
  ],
  selector: 'mus-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  selectedAction: string | null = null;
  selectedAmount = 1;
  isAnswer = false;
  max = 40; // Calculate max for hor dago !

  onSubmit() {
    console.log(`Selected action: ${this.selectedAction}`);
    console.log(`Selected amount: ${this.selectedAmount}`);
    this.selectedAction = null;
    this.selectedAmount = 1;
  }

}
