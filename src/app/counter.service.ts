import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _compteur: number = 0;

  get compteur(): number {
    return this._compteur;
  }

  increment() {
    this._compteur++;
  }

  decrement() {
    this._compteur--;
  }
}
