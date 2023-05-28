import { Component } from '@angular/core';
import { ActionsComponent } from './actions/actions.component';
import { ScoresComponent } from './scores/scores.component';

@Component({
  standalone: true,
  imports: [
    ActionsComponent,
    ScoresComponent
  ],
  selector: 'mus-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {}
