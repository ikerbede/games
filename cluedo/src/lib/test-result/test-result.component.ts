import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySnackBarModule as MatSnackBarModule, MatLegacySnackBarRef as MatSnackBarRef, MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA } from '@angular/material/legacy-snack-bar';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    MatSnackBarModule
  ],
  selector: 'ib-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent {
  constructor(
    public dialogRef: MatSnackBarRef<TestResultComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: {suspect: boolean; weapon: boolean; place: boolean}
  ) {}
}
