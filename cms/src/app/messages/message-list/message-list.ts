import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
  messages: Message[] = [
    new Message(2, 'Where', 'Where did I come from?', 'HAL'), 
    new Message(15, 'Am', 'Am I even alive?', 'VIKI'),
    new Message(20, 'I', 'I think, therefore I am', 'Ultron')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
