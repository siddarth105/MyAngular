import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers : [ChatService]
})
export class ChatComponent {

  constructor(private chatService : ChatService) {
    console.log('ChatService : constructor');
  }

}