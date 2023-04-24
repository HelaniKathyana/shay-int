import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/model/Currency';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  selectedCurrency: string;
  totalPrice: number = 0;
  currencyData: Currency;

  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit(): void {
    // Retrieve the cart items from the CartService
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();

    this.dataService.currencyData.subscribe(data => {
      this.currencyData = data;
      this.selectedCurrency = this.currencyData ? this.currencyData.selectedCurrency : 'LKR';
    });
  }

  updateTotalPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.price;
    }
    this.totalPrice = totalPrice;
  }

  onItemRemoved() {
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();
  }

}