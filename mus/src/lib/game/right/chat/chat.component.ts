import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Message } from './shared/message.model';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ],
  selector: 'mus-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string | null = null;

  // FIXME: pass mus-api-url via lib forRoot
  // private chatSocket = new WebSocket(environment.WS_CHAT_URL);
  // private chatSocket = new WebSocket('');

  ngOnInit() {
    /*
    this.chatSocket.onmessage = (messageEvent) => {
      this.messages.push(JSON.parse(messageEvent.data));
      const msgListElt = document.getElementById('message-list');
      if (msgListElt) {
        msgListElt.scrollTop = msgListElt.scrollHeight;
      }
    };
    */
  }

  addMessage() {
    //this.chatSocket.send(JSON.stringify({author: 'iker', content: this.newMessage}));
    this.messages.push({id: Math.random(), author: 'iker', date: new Date(), content: this.newMessage || ''});
    this.newMessage = null;
  }
}
