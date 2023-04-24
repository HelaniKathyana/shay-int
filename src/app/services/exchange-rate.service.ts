import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../model/Currency';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  getExchangeRates(currency) {
    return this.http.get<any>(`http://localhost:3000/api/get-rates/${currency}`);
  }

  getCurrencyDataFromLocal(): Currency {
    const data = localStorage.getItem('currencyData');
    return data ? JSON.parse(data) : null;
  }
}