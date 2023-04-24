import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '../model/Currency';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sharedData = new BehaviorSubject<Currency>(null);
  currencyData = this.sharedData.asObservable();

  constructor() { }

  setData(data: Currency) {
    this.sharedData.next(data);
  }
}
