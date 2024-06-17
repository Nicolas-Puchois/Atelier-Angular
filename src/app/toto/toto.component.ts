import { Component } from '@angular/core';

@Component({
  selector: 'app-toto',
  standalone: true,
  imports: [],
  templateUrl: './toto.component.html',
  styleUrl: './toto.component.css'
})
export class TotoComponent {
  title: string = 'toto !';
  result: number = 0;

  IncrementeComponent(){
    this.result++
  }
  DecrementeComponent(){
    this.result--
  }
}
