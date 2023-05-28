import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CodeName } from '../shared/code-name';

@Component({
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  selector: 'ib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() codeNames: CodeName[] = [];
}
