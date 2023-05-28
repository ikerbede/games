import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { CodeName } from '../shared/code-name';

@Component({
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  selector: 'ib-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {codeNames$: Observable<CodeName[]>}) {}
}
