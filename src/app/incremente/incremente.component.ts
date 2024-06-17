import { Component} from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-incremente',
  standalone: true,
  imports: [],
  templateUrl: './incremente.component.html',
  styleUrl: './incremente.component.css'
})

export class IncrementeComponent { 
  constructor(public CounterService: CounterService){}
  
  increment(){
    this.CounterService.increment();
  }
}
