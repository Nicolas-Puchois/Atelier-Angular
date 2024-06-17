import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TotoComponent } from './toto/toto.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IncrementeComponent } from './incremente/incremente.component';
import { DecrementeComponent } from './decremente/decremente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TotoComponent,
    IncrementeComponent,
    DecrementeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
