import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/model/Currency';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItems: any[] = [];
  @Output() itemRemoved = new EventEmitter<any>();
  selectedCurrency: string;
  currencyData: Currency;

  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();

    this.dataService.currencyData.subscribe(data => {
      this.currencyData = data;
      this.selectedCurrency = this.currencyData ? this.currencyData.selectedCurrency : 'LKR';
    });
  }

  removeFromCart(index: any) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getItems();
    this.itemRemoved.emit(); // emit event when item is removed
  }
}