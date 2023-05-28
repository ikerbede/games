import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconService } from '@ikerbede/shared';
import { Observable, shareReplay } from 'rxjs';
import { GoalComponent } from './goal/goal.component';
import { GridComponent } from './grid/grid.component';
import { CodeName } from './shared/code-name';
import { CodeNamesService } from './shared/code-names.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    GridComponent
  ],
  selector: 'ib-code-names',
  templateUrl: './code-names.component.html',
  styleUrls: ['./code-names.component.scss']
})
export class CodeNamesComponent implements OnInit {
  isRedFirst = true;
  codeNames$!: Observable<CodeName[]>;

  constructor(
    private readonly iconService: IconService,
    private readonly dialog: MatDialog,
    private readonly cnService: CodeNamesService
  ) {
    this.iconService.addIcons(['search']);
  }

  ngOnInit(): void {
    this.codeNames$ = this.cnService.getCodeNames(this.isRedFirst).pipe(shareReplay(1));
  }

  setNewGame() {
    this.codeNames$ = this.cnService.getCodeNames(this.isRedFirst, true).pipe(shareReplay(1));
  }

  showGoal() {
    this.dialog.open(GoalComponent, {
      width: '270px',
      data: {codeNames$: this.codeNames$},
      panelClass: 'goal-dialog'
    });
  }
}
