import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconService } from '@ikerbede/shared';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mus-app',
  templateUrl: './mus.component.html',
  styleUrls: ['./mus.component.scss']
})
export class MusComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.addIcons([
      'account_circle',
      'bar_chart',
      'question_answer',
      'record_voice_over',
      'scatter_plot',
      'send'
    ]);
  }
}
