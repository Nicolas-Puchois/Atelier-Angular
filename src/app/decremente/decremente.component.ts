import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-decremente',
  standalone: true,
  imports: [],
  templateUrl: './decremente.component.html',
  styleUrl: './decremente.component.css'
})
export class DecrementeComponent {

  constructor(public CounterService: CounterService){}

  decrement(){
    this.CounterService.decrement();
  }
}
