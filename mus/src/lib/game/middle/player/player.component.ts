import { Component, Input } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'mus-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() name = 'guest';
  @Input() isEsku = false;

  action = 'enbido';
}
