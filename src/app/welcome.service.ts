import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
    message : string =  "Sumimasen";

  getMessage(): string{
    return this.message
  }

  setMessage(newMessage: string){
    this.message = newMessage
  }
}
