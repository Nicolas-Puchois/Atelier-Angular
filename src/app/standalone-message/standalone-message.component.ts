import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-message',
  standalone: true,
  imports: [],
  templateUrl: './standalone-message.component.html',
  styleUrl: './standalone-message.component.css'
})
export class StandaloneMessageComponent {
  message: string = "Stand Alone"
}
