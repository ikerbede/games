import { Component, Inject } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { Crime } from '../shared/crime.model';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
  ],
  selector: 'ib-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent {
  constructor(
    public dialogRef: MatDialogRef<CrimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Crime
  ) {}
}
