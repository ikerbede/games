import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  standalone: true,
  imports: [ChatComponent],
  selector: 'mus-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent {}
