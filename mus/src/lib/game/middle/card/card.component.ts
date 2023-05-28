import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  selector: 'mus-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() type!: string;
  @Input() value!: number;

  isMusEnabled = false;

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'bastoi',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/bastoi.svg'));
    this.matIconRegistry.addSvgIcon(
      'ezpata',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ezpata.svg'));
    this.matIconRegistry.addSvgIcon(
      'kopa',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kopa.svg'));
    this.matIconRegistry.addSvgIcon(
      'urre',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/urre.svg'));
  }
}
