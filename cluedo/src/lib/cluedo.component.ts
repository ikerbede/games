import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconService } from '@ikerbede/shared';
import { CrimeComponent } from './crime/crime.component';
import { RoundCreationComponent } from './round-creation/round-creation.component';
import { Deck } from './shared/deck.model';
import { Round } from './shared/round.model';
import { ToIconPipe } from './shared/to-icon.pipe';
import { TestResultComponent } from './test-result/test-result.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    ToIconPipe
  ],
  selector: 'ib-cluedo',
  templateUrl: './cluedo.component.html',
  styleUrls: ['./cluedo.component.scss'],
})
export class CluedoComponent {
  crimeDisplayEnabled = true;
  round?: Round;
  deck: Deck;
  test = new FormGroup({
    suspect: new FormControl(0, {nonNullable: true}),
    weapon: new FormControl(0, {nonNullable: true}),
    place: new FormControl(0, {nonNullable: true}),
  });

  constructor(
    private readonly dialog: MatDialog,
    private readonly snackBar: MatSnackBar,
    private readonly iconService: IconService
  ) {
    this.deck = new Deck();
    this.iconService.addIcons([
      'add',
      'build',
      'not_listed_location',
      'person_outline',
      'search'
    ]);
  }

  createNewRound() {
    const dialogRef = this.dialog.open(RoundCreationComponent);
    dialogRef.afterClosed().subscribe(roundConfig => {
      this.round = new Round(roundConfig[0], roundConfig[1]);
    });
  }

  testCrime() {
    if (this.round) {
      const crime = this.round.getCrime();
      this.snackBar.openFromComponent(TestResultComponent, {
        data: {
          suspect: this.test.controls.suspect.value === crime.suspect.id,
          weapon: this.test.controls.weapon.value === crime.weapon.id,
          place: this.test.controls.place.value === crime.place.id
        },
        duration: 3000
      });
    }
  }

  clearTest() {
    this.test.reset();
  }

  displayCrime() {
    if (this.round) {
      this.dialog.open(CrimeComponent, {
        width: '300px',
        data: this.round.getCrime()
      });
    }
  }
}
