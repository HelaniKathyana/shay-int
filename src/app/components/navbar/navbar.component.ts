import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/model/Currency';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedCurrency = 'LKR';
  currencyData: Currency;
  cartItemCount = 0;

  constructor(private exchangeRateService: ExchangeRateService, private dataService: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchExchangeRates();

    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  fetchExchangeRates() {
    this.exchangeRateService.getExchangeRates(this.selectedCurrency).subscribe(data => {
      let dataObj = data.message[0];
      this.currencyData = {
        selectedCurrency: dataObj.currency,
        fromLkr: dataObj.fromLkr,
        toLkr: dataObj.toLkr,
        lastUpdated: new Date()
      }
      this.updateSharedData(this.currencyData);
      this.selectedCurrency = this.currencyData.selectedCurrency;
    })
  }

  updateSharedData(data: Currency) {
    this.dataService.setData(data);
  }

}
