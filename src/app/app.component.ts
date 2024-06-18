import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandaloneMessageComponent } from './standalone-message/standalone-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    StandaloneMessageComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
